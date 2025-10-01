import json
import os
from typing import Dict, Any, List
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: API для пробива и поиска штрафов по УИН, госномеру, телефону
    Args: event - dict с httpMethod, queryStringParameters (search_type, search_value)
          context - object с request_id
    Returns: HTTP response с найденными штрафами
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
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
    
    query_params = event.get('queryStringParameters', {})
    search_type = query_params.get('search_type', '')
    search_value = query_params.get('search_value', '').strip()
    
    if not search_type or not search_value:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'search_type and search_value are required'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(db_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    try:
        fines: List[Dict] = []
        
        if search_type == 'uin':
            cursor.execute(
                "SELECT id, fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status, created_at, "
                "removed_at, removed_by FROM fines WHERE fine_number LIKE %s",
                (f'%{search_value}%',)
            )
            fines = cursor.fetchall()
        
        elif search_type == 'license_plate':
            cursor.execute(
                "SELECT id, fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status, created_at, "
                "removed_at, removed_by FROM fines WHERE license_plate ILIKE %s",
                (f'%{search_value}%',)
            )
            fines = cursor.fetchall()
        
        elif search_type == 'phone':
            cursor.execute(
                "SELECT id, fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status, created_at, "
                "removed_at, removed_by FROM fines WHERE driver_phone LIKE %s",
                (f'%{search_value}%',)
            )
            fines = cursor.fetchall()
        
        elif search_type == 'driver_name':
            cursor.execute(
                "SELECT id, fine_number, driver_name, driver_phone, license_plate, "
                "violation_date, fine_amount, violation_type, status, created_at, "
                "removed_at, removed_by FROM fines WHERE driver_name ILIKE %s",
                (f'%{search_value}%',)
            )
            fines = cursor.fetchall()
        
        else:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid search_type. Use: uin, license_plate, phone, driver_name'}),
                'isBase64Encoded': False
            }
        
        result = []
        total_amount = 0
        active_count = 0
        removed_count = 0
        
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
                if fine_dict.get('status') == 'active':
                    total_amount += fine_dict['fine_amount']
            
            if fine_dict.get('status') == 'active':
                active_count += 1
            else:
                removed_count += 1
            
            result.append(fine_dict)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'fines': result,
                'total_fines': len(result),
                'active_fines': active_count,
                'removed_fines': removed_count,
                'total_amount': total_amount,
                'search_type': search_type,
                'search_value': search_value
            }),
            'isBase64Encoded': False
        }
    
    finally:
        cursor.close()
        conn.close()
