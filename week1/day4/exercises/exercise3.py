from exercise2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        if args:
            names = ', '.join(args)
            print(f"{self.name}, {names} all play together")

    def do_a_trick(self):
        if self.trained:
            random_trick = random.choice([
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ])
            print(f"{self.name} {random_trick}")
        else:
            print(f"{self.name} is not trained yet")


if __name__ == "__main__":
    d1 = PetDog('rex', 3, 21)
    d2 = Dog('Puppies', 1, 10)
    d3 = Dog('Charles', 2, 32)

    d1.play(d2.name, d3.name)
    d1.do_a_trick()

    d1.train()
    d1.do_a_trick()