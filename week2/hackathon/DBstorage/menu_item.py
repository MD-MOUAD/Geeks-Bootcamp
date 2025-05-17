from DBstorage.db import run_query

class MenuItem:

    table_name = "menu_items"

    def __init__(self, name, price):
        self.name = name
        self.price = price

  
    def save(self):
        query = f"INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"
        run_query(query, (self.name, self.price))

    def delete(self):
        query = f"DELETE FROM {MenuItem.table_name} WHERE item_name = %s"
        run_query(query, (self.name,))

    def update(self, new_name, new_price):
        query = f"""
        UPDATE {MenuItem.table_name} SET item_name = %s, item_price = %s
        WHERE item_name = %s
        """
        run_query(query, (new_name, new_price, self.name))
        self.name = new_name
        self.price = new_price


