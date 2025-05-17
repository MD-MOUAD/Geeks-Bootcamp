import psycopg2

def get_connection():
    try:
        return psycopg2.connect(
            dbname="restaurant_menu_ms",
            user="postgres",
            password="password",
            host="localhost",
            port="5432"
            )
    except psycopg2.Error as e:
        print(f"Error connecting to the database: {e}")
        return None

def run_query(query, params=None, fetchAll=False, fetchOne=False):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    result = cursor.fetchall() if fetchAll else cursor.fetchone() if fetchOne else None
    conn.commit()
    cursor.close()
    conn.close()
    return result
