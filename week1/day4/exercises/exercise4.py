class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name')}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        print(f"No family member named {name} found.")
        return False

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(member)



if __name__ == "__main__":
    members_data = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
    ]

    Geeks_family = Family("Geeks", members_data)
    Geeks_family.family_presentation()
    print()

    Geeks_family.born(name="Aya", age=1, gender="Female", is_child=True)
    print()
    Geeks_family.family_presentation()

    print("Is Aya over 18? ", Geeks_family.is_18('Aya'))
    print("Is Michael over 18? ", Geeks_family.is_18('Michael'))
