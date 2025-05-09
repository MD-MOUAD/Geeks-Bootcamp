class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        """Add a new animal to the zoo"""
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        """Get all animals in the zoo"""
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        """Sell an animal from the zoo"""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        """Sort animals by first letter"""
        sorted_animals_list = sorted(self.animals)
        self.animals = sorted_animals_list
        sorted_animals_dict = {}

        for animal in sorted_animals_list:
            if animal[0].upper() not in sorted_animals_dict:
                sorted_animals_dict[animal[0]] = animal
            else:
                if isinstance(sorted_animals_dict[animal[0]][0], list):
                    sorted_animals_dict[animal[0]].append(animal)
                else:
                    sorted_animals_dict[animal[0]] = [sorted_animals_dict[animal[0]], animal]
        return sorted_animals_dict

    def get_group(self):
        """Get animals grouped by first letter"""
        sorted_result = self.sort_animals()
        for key, value in sorted_result.items():
            print(f"{key}: {value}")

# Create an object called new_york_zoo and call all the methods.
new_york_zoo = Zoo("Wild Park")

new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Tom")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Cat")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Tom")

new_york_zoo.get_group()


