from DBstorage.db import run_query
from DBstorage.menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        query = f"SELECT * FROM menu_items WHERE item_name = %s"
        result = run_query(query, (name,), fetchOne=True)
        if result:
            return MenuItem(result[1], result[2])
        return None

    @classmethod
    def all_items(cls):
        query = f"SELECT * FROM menu_items"
        rows =  run_query(query, fetchAll=True)
        return [MenuItem(row[1], row[2]) for row in rows]
    
