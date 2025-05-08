class Dog:
  def __init__(self, name, height):
    self.name = name
    self.height = height

  def bark(self):
    print(f"{self.name} goes woof!")

  def jump(self):
    print(f"{self.name} jumps {self.height * 2} cm high!")

# Q5
davids_dog = Dog("Rex", 50)

# Q6
print(f"David's dog name is{davids_dog.name} and it is {davids_dog.height}cm high")
davids_dog.bark()
davids_dog.jump()
# Q7
sarahs_dog = Dog("Teacup", 20)
# Q8
print(f"Sarah's dog name is{sarahs_dog.name} and it is {sarahs_dog.height}cm high")
sarahs_dog.bark()
sarahs_dog.jump()

# Q9
if davids_dog.height > sarahs_dog.height:
  print(f"{davids_dog.name} is bigger than {sarahs_dog.name}")
else:
  print(f"{sarahs_dog.name} is bigger than {davids_dog.name}")

# bigger_dog = davids_dog if davids_dog.height > sarahs_dog.height else sarahs_dog
# print(f"The bigger dog is {bigger_dog.name}")




