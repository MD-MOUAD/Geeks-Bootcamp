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
        raise

def run_query(query, params=None, fetchAll=False, fetchOne=False):
    conn = get_connection()
    result = None

    try:
        with conn:
            with conn.cursor() as cursor:
                cursor.execute(query, params)
                if fetchAll:
                    result = cursor.fetchall()
                elif fetchOne:
                    result = cursor.fetchone()
    except psycopg2.Error as e:
        print(f"Error executing query: {e}")
        raise  # Re-raise the exception so Flask can catch it
    finally:
        conn.close()

    return result
