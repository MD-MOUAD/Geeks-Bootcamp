from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- Restaurant Menu Manager ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show Menu")
        print("Q - Quit")

        choice = input("Enter your choice: ").strip().upper()
        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name}: {item.price} DH")
            else:
                print("Item not found.")
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'Q':
            print("\nFinal Menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Try again.")

def add_item_to_menu():
    name = input("Enter item name: ")
    try:
        price = int(input("Enter item price: "))
        item = MenuItem(name, price)
        item.save()
        print("Item added successfully.")
    except Exception as e:
        print(f"Error: {e}")

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    old_name = input("Enter item name to update: ")
    item = MenuManager.get_by_name(old_name)
    if item:
        new_name = input("Enter new name: ")
        new_price = int(input("Enter new price: "))
        item.update(new_name, new_price)
        print("Item updated successfully.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"{item.name}: {item.price} DH")


if __name__ == '__main__':
    show_user_menu()