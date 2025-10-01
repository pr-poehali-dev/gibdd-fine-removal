import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: API для управления штрафами ГИБДД (получение списка, удаление из базы)
    Args: event - dict с httpMethod, body, queryStringParameters
          context - object с request_id и др.
    Returns: HTTP response dict с данными штрафов
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    db_url = os.environ.get('DATABASE_URL')
    if not db_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database connection not configured'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(db_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    try:
        if method == 'GET':
            query_params = event.get('queryStringParameters', {})
            status_filter = query_params.get('status', 'active')
            
            cursor.execute(
                "SELECT id, fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status, created_at, "
                "removed_at, removed_by FROM fines WHERE status = %s ORDER BY created_at DESC",
                (status_filter,)
            )
            fines = cursor.fetchall()
            
            result = []
            for fine in fines:
                fine_dict = dict(fine)
                if fine_dict.get('violation_date'):
                    fine_dict['violation_date'] = fine_dict['violation_date'].isoformat()
                if fine_dict.get('created_at'):
                    fine_dict['created_at'] = fine_dict['created_at'].isoformat()
                if fine_dict.get('removed_at'):
                    fine_dict['removed_at'] = fine_dict['removed_at'].isoformat()
                if fine_dict.get('fine_amount'):
                    fine_dict['fine_amount'] = float(fine_dict['fine_amount'])
                result.append(fine_dict)
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'fines': result}),
                'isBase64Encoded': False
            }
        
        elif method == 'PUT':
            body_data = json.loads(event.get('body', '{}'))
            fine_id = body_data.get('fine_id')
            admin_id = body_data.get('admin_id', 'admin')
            reason = body_data.get('reason', 'Удалено администратором')
            
            if not fine_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'fine_id is required'}),
                    'isBase64Encoded': False
                }
            
            cursor.execute(
                "SELECT fine_number FROM fines WHERE id = %s",
                (fine_id,)
            )
            fine = cursor.fetchone()
            
            if not fine:
                return {
                    'statusCode': 404,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Fine not found'}),
                    'isBase64Encoded': False
                }
            
            now = datetime.now()
            
            cursor.execute(
                "UPDATE fines SET status = %s, removed_at = %s, removed_by = %s WHERE id = %s",
                ('removed', now, admin_id, fine_id)
            )
            
            cursor.execute(
                "INSERT INTO removal_logs (fine_id, fine_number, removed_by, removal_reason, removed_at) "
                "VALUES (%s, %s, %s, %s, %s)",
                (fine_id, fine['fine_number'], admin_id, reason, now)
            )
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'message': 'Fine removed successfully'}),
                'isBase64Encoded': False
            }
        
        elif method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            
            required_fields = ['fine_number', 'driver_name', 'license_plate', 'violation_date', 'fine_amount']
            for field in required_fields:
                if field not in body_data:
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': f'{field} is required'}),
                        'isBase64Encoded': False
                    }
            
            cursor.execute(
                "INSERT INTO fines (fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status) "
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
                (
                    body_data['fine_number'],
                    body_data['driver_name'],
                    body_data.get('driver_phone'),
                    body_data['license_plate'],
                    body_data['violation_date'],
                    body_data['fine_amount'],
                    body_data.get('violation_type'),
                    'active'
                )
            )
            
            new_id = cursor.fetchone()['id']
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'id': new_id}),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    finally:
        cursor.close()
        conn.close()
