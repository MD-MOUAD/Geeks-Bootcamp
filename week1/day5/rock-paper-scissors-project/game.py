import random
class Game:
    def __init__(self):
        pass
    def get_user_item(self):
        while True:
            self.item=input("Ask the user to select an item (rock/paper/scissors)")
            if self.item=="rock" or self.item=="paper" or self.item=="scissors":
                return self.item
        
    
    def get_computer_item(self):
        return random.choice(["rock","paper","scissors"])
    
    def get_game_result(self,user_item, computer_item):
        print(f"\nYou chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        if user_item==computer_item:
            return "draw"
        elif user_item=="rock" and computer_item=="scissors":
            return "win"
        elif user_item=="scissors" and computer_item=="paper":
            return "win"
        elif user_item=="paper" and computer_item=="rock":
            return "win"
        else:
            return "loss"
    
    def play(self):
        return self.get_game_result(self.get_user_item(),self.get_computer_item())





