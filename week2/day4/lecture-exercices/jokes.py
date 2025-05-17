import requests
import json
import sqlite3
from faker import Faker
from time import time


def get_and_save_jokes(number_of_jokes):
    # Make a connection to the database
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()  # Think of the cursor as the place that executes queries

    # Create jokes table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            joke TEXT NOT NULL
        )
    ''')
    connection.commit()

    for i in range(number_of_jokes):
        url = 'https://api.chucknorris.io/jokes/random'
        data = requests.get(url)
        data = data.json()
        joke = data['value']
        joke = joke.replace("'", "")

        query = f"INSERT INTO jokes (joke) VALUES ('{joke}');"
        cursor.execute(query)  # Cursor runs the query
        connection.commit()  # Finalize the result. "Write" it to the DB

    connection.close()  # Close the connection


def gen_fake_data(n):
    start = time()
    f = Faker()
    # Make a connection to the database
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()  # Think of the cursor as the place that executes queries

    # Create jokes table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            joke TEXT NOT NULL
        )
    ''')
    connection.commit()

    for i in range(n):
        name = f.name()
        query = f"INSERT INTO jokes (joke) VALUES ('{name}');"
        cursor.execute(query)  # Cursor runs the query

    connection.commit()  # Finalize the result. "Write" it to the DB
    connection.close()
    end = time()
    print(f"The function ran in {round(end-start, 2)}s")


def get_jokes():
    # Make a connection to the database
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()  # Think of the cursor as the place that executes queries

    # fetch all jokes from the database
    query = "SELECT * FROM jokes;"
    cursor.execute(query)
    jokes = cursor.fetchall()
    return jokes


if __name__ == "__main__":
    # we can fetch jokes from the api
    get_and_save_jokes(10)
    # or generate fake data
    gen_fake_data(10)

    jokes = get_jokes()
    for joke in jokes:
        print(joke[1])
        print("-"*100)