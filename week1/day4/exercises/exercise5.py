from exercise4 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")


    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()


if __name__ == '__main__':
        
    incredible_members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]

    incredibles = TheIncredibles("Incredibles", incredible_members)
    incredibles.incredible_presentation()


    print()
    incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')
    print()

    incredibles.incredible_presentation()
