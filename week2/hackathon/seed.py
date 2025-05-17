import os
import json
import csv
from DBstorage.db import run_query

def load_seed_data():
    """Load seed items from JSON or CSV file."""
    json_path = os.path.join(os.path.dirname(__file__), "seed_data.json")
    csv_path  = os.path.join(os.path.dirname(__file__), "seed_data.csv")

    if os.path.isfile(json_path):
        with open(json_path, "r", encoding="utf-8") as f:
            return json.load(f)
    elif os.path.isfile(csv_path):
        items = []
        with open(csv_path, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                items.append({
                    "name": row["name"],
                    "price": int(row["price"])
                })
        return items
    else:
        raise FileNotFoundError(
            "No seed_data.json or seed_data.csv found in directory."
        )

def reset_and_seed_database():
    run_query("DROP TABLE IF EXISTS Menu_Items;")

    run_query("""
    CREATE TABLE Menu_Items (
        item_id    SERIAL PRIMARY KEY,
        item_name  VARCHAR(30) NOT NULL UNIQUE,
        item_price SMALLINT      DEFAULT 0
    );
    """)

    seed_items = load_seed_data()

    insert_sql = """
    INSERT INTO Menu_Items (item_name, item_price)
    VALUES (%s, %s)
    ON CONFLICT (item_name) DO NOTHING;
    """
    for item in seed_items:
        run_query(insert_sql, (item["name"], item["price"]))

    print("Database reset and seeded successfully.🎉🎉🎉")

if __name__ == "__main__":
    reset_and_seed_database()
