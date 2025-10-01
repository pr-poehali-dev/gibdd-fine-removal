import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: API для получения истории пробивов данных
    Args: event - dict с httpMethod, queryStringParameters (limit)
          context - object с request_id
    Returns: HTTP response с историей поисков
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
    limit = int(query_params.get('limit', 50))
    
    conn = psycopg2.connect(db_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    try:
        cursor.execute(
            "SELECT id, search_type, search_value, results_count, admin_id, searched_at "
            "FROM search_logs ORDER BY searched_at DESC LIMIT %s",
            (limit,)
        )
        logs = cursor.fetchall()
        
        result = []
        for log in logs:
            log_dict = dict(log)
            if log_dict.get('searched_at'):
                log_dict['searched_at'] = log_dict['searched_at'].isoformat()
            result.append(log_dict)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'logs': result, 'total': len(result)}),
            'isBase64Encoded': False
        }
    
    finally:
        cursor.close()
        conn.close()
