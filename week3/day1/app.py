from flask import Flask, jsonify, request
from DBstorage.menu_item import MenuItem
from DBstorage.menu_manager import MenuManager
import psycopg2
from psycopg2.errors import UniqueViolation
from flasgger import Swagger
import yaml
import os

app = Flask(__name__)


with open(os.path.join(os.path.dirname(__file__), 'swagger.yaml'), 'r') as f:
    swagger_template = yaml.safe_load(f)

swagger = Swagger(app, template=swagger_template)

@app.route("/items", methods=["GET"])
def get_all_items():
    items = MenuManager.all_items()
    return jsonify([{"name": item.name, "price": item.price} for item in items]), 200

@app.route("/items/<string:name>", methods=["GET"])
def get_item(name):
    real_name = name.replace("_", " ")
    item = MenuManager.get_by_name(real_name)
    if item:
        return jsonify({"name": item.name, "price": item.price}), 200
    return jsonify({"error": "Item not found"}), 404


@app.route("/items", methods=["POST"])
def create_item():
    data = request.get_json()
    name = data.get("name")
    price = data.get("price")

    if not name or not isinstance(price, int):
        return jsonify({"error": "Invalid input"}), 400

    try:
        item = MenuItem(name, price)
        item.save()
        return jsonify({"message": "Item added"}), 201

    except UniqueViolation:
        return jsonify({"error": f"Item with name '{name}' already exists"}), 409

    except psycopg2.IntegrityError:
        return jsonify({"error": "Integrity error"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/items/<string:name>", methods=["DELETE"])
def delete_item(name):
    real_name = name.replace("_", " ")
    item = MenuManager.get_by_name(real_name)
    if item:
        item.delete()
        return jsonify({"message": "Item deleted"}), 200
    return jsonify({"error": "Item not found"}), 404


@app.route("/items/<string:name>", methods=["PUT"])
def update_item(name):
    real_name = name.replace("_", " ")
    item = MenuManager.get_by_name(real_name)
    if not item:
        return jsonify({"error": "Item not found"}), 404

    data = request.get_json()
    new_name = data.get("new_name")
    new_price = data.get("new_price")

    if not new_name or not isinstance(new_price, int):
        return jsonify({"error": "Invalid input"}), 400

    if new_name != name:
        if MenuManager.get_by_name(new_name):
            return jsonify({"error": "Item with that new name already exists"}), 409

    try:
        item.update(new_name, new_price)
        return jsonify({"message": "Item updated"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
