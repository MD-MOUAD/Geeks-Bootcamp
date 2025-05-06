# 🌟 Exercise 1 : Hello World
print('Hello world\n' * 4)

# Exercise 2 : Some Math
print((99 **3) * 8)

# 🌟 Exercise 3 : What’s your name ?
my_name = 'mouad'
username = input('What is your name? ')

if username == my_name:
  print('You are my brother')


# 🌟 Exercise 4 : Tall enough to ride a roller coaster
height = int(input('Enter your height in centimeter: '))

if height > 145:
  print('your are tall enough to ride')
else:
  print('you need to grow some more to ride')

# 🌟 Exercise 5 : Favorite Numbers
my_fav_numbers = set([2, 4, 6])
my_fav_numbers.add(8)
my_fav_numbers.add(0)
my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {1, 3, 5, 9, 2}

our_fav_numbers = my_fav_numbers.copy()

for n in friend_fav_numbers:
  our_fav_numbers.add(n)

print(our_fav_numbers)

# 🌟 Exercise 6: Tuple
# no it not possible

# 🌟 Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
# print(basket)
basket.remove('Blueberries')
# print(basket)
basket.append('Kiwi')
# print(basket)
basket.append('Apples')
# print(basket)
print(basket.count("Apples"))
basket.clear()
print(basket)

# 🌟 Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while 'Pastrami sandwich' in sandwich_orders:
  sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

finished_sandwiches = []

while sandwich_orders:
  sandwich = sandwich_orders.pop(0)
  finished_sandwiches.append(sandwich)


print("sandwich_orders:", sandwich_orders)
print("finished_sandwiches:", finished_sandwiches)

for sandwich in finished_sandwiches:
  print(f"I made your {sandwich}")

