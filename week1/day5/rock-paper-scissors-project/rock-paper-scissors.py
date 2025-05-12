import game
result={"won":0,"loss":0,"draw":0}



def get_user_menu_choice():
    p=input(f"(g):play a new game :\n(q):quite :\n ")
    return p

def print_results(result):
    print(f"you won {result["won"]} times\nyou loss {result["loss"]} times\nyou draw {result["draw"]} times")


def main():
    while True:
        jo=get_user_menu_choice()
        if jo=="g":
            on=game.Game()
            no=on.play()
            print(no)
            if no=="draw":
                result["draw"]+=1
            elif no=="win":
                result["won"]+=1
            else:
                result["loss"]+=1
        elif jo=="q":
            print_results(result)
            break
        

main()

