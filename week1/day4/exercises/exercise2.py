class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_dogs_power = other_dog.run_speed() * other_dog.weight

        winner = self if my_power > other_dogs_power else other_dog

        return f"{winner.name} won the fight"


if __name__ == "__main__":
    buddy = Dog("Buddy", 4, 18)

    rex = Dog('Rex', 1, 20)
    puppies = Dog('Puppies', 1, 20)

    print(buddy.bark())
    print(rex.bark())
    print(puppies.bark())


    rex_puppies_fight_result = rex.fight(puppies)
    print(rex_puppies_fight_result)


    buddy_puppies_fight_result = buddy.fight(puppies)
    print(buddy_puppies_fight_result)

    buddy_rex_fight_result = buddy.fight(rex)
    print(buddy_rex_fight_result)