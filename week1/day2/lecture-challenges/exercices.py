class Dog:
  def __init__(self, name, age, weight):
    self.name = name
    self.age = age
    self.__weight = weight

  def bark(self):
    print(f"{self.name} is barking")

  def __str__(self):
    return f"Dog(name={self.name}, age={self.age}, weight={self._weight})"


dog1 = Dog("Buddy", 3, 10)
dog1.__weight = 15
print(dog1)
