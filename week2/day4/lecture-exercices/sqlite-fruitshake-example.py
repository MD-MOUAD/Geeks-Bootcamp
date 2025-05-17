import sqlite3
from tabulate import tabulate

def create_fruit_table():
    # Create the fruit table if it doesn't exist
    query = """
    CREATE TABLE IF NOT EXISTS fruit (
        name TEXT PRIMARY KEY,
        quantity INTEGER
    );
    """
    run_query(query)

    # Add some initial fruit if table is empty
    if not run_query("SELECT * FROM fruit"):
        query = """
        INSERT INTO fruit (name, quantity) VALUES
        ('Apple', 10),
        ('Banana', 15), 
        ('Orange', 12),
        ('Mango', 8);
        """
        run_query(query)


def order():
    # This is like taking a customer's order at our shake stand
    choice = None
    while choice != "X":  # Keep asking until they say "X" to exit
        print("Moti's Fruit Shake Stand with questionable hygiene")
        inv = get_inv()  # Check what fruits we have available
        # Show the fruits in a nice table
        print(tabulate(inv, headers=['Fruit', 'Amount']))
        # Ask what fruit they want
        choice = input("What do you want to add to your shake? ")
        update_inv(choice)  # Remove one fruit from our stock
    else:
        print("Bye")  # Say goodbye when they're done ordering


def update_inv(choice):
    # This removes one fruit from our inventory when someone orders it
    query = f"UPDATE fruit SET quantity=quantity-1 WHERE name = '{choice}';"
    return run_query(query)


def get_inv():
    # This checks our fruit inventory and returns what we have
    query = "SELECT name, quantity FROM fruit ORDER BY name ASC;"
    return run_query(query)


def run_query(query):
    # This is like opening our fruit notebook (database), writing in it, and closing it
    connection = sqlite3.connect("shakes.db")  # Open the notebook
    cursor = connection.cursor()  # Get our pencil ready
    cursor.execute(query)  # Write what we need to write
    connection.commit()  # Save our changes
    results = cursor.fetchall()  # Read what's written
    connection.close()  # Close the notebook
    return results  # Tell others what we found


if __name__ == "__main__":
    create_fruit_table()  # Create table and add initial data
    order()