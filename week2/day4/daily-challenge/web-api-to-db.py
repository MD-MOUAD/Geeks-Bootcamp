import requests
import psycopg2
import random

DB_NAME = "public"
USER = "postgres" 
PASSWORD = "password" 
HOST = "localhost"
PORT = "5432"


def create_countries_table(): 
    """create new table with id, num"""

    query = f'''
    create table if not exists countries (
        id serial primary key,
        name text not null,
        capital text not null,
        flag text not null,
        subregion text not null,
        population integer not null
    );
    '''
    cursor.execute(query)
    connection.commit()

def insert_into_table(name, capital, flag, subregion, population):


    query = f'''
    insert into countries (name, capital, flag, subregion, population)
    values
    (%s, %s, %s, %s, %s)
    '''
    cursor.execute(query, (name, capital, flag, subregion, population,))
    connection.commit()

url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population'
data = requests.get(url)
countries_list = random.sample(data.json(), 10)


if __name__ == '__main__':

    try:
        connection = psycopg2.connect(
            dbname = DB_NAME,
            user = USER,
            password = PASSWORD,
            host = HOST,
            port = PORT
        )
    except Exception as e:
        print(f"Error: {e}")


    cursor = connection.cursor()



    create_countries_table()
    for country in countries_list:
        name = country['name']['common']
        capital = country["capital"][0] if len(country['capital']) > 0 else ''
        flag = country["flag"]
        subregion = country['subregion']
        population = country['population']

        insert_into_table(name, capital, flag, subregion, population)
 

    connection.close()

