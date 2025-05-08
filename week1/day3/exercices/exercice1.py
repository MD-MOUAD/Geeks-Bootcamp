# # 🌟 Exercise 1: Cats

class Cat:
  def __init__(self, cat_name, cat_age):
    self.name = cat_name
    self.age = cat_age


cat1 = Cat("Tom", 2)
cat2 = Cat("Butch", 4)
cat3 = Cat("Fluffy", 1)

def oldest_cat(*args):
  oldest_cat = args[0]

  for cat in args:
    if cat.age > oldest_cat.age:
      oldest_cat = cat

  return oldest_cat



oldest_cat = oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")





