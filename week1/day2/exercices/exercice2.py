# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {}
while True:
    name = input("Enter the name of the family member: ")
    age = int(input("Enter the age of the family member: "))
    family[name] = age
    input_continue = input("Do you want to add another family member? (y/n) ")
    if input_continue != "y":
        break


def get_ticket_price(age):
    if age < 3:
        return 0
    elif age >= 3 and age <= 12:
        return 10
    else:
        return 15

for name, age in family.items():
    print(f"{name} : {get_ticket_price(age)}$")

total_price = 0
for age in family.values():
    total_price += get_ticket_price(age)

print(f"The total price for the family is {total_price}$")

