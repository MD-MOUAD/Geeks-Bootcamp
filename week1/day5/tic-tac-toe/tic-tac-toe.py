
tic=[["","",""],["","",""],["","",""]]


def display_board():
    print("*******************\n" 
f"*  {tic[0][0]}  |  {tic[0][1]}    |  {tic[0][2]}   *\n" 
"-------------------\n" 
f"*  {tic[1][0]}  |  {tic[1][1]}    |  {tic[1][2]}   *\n" 
"-------------------\n" 
f"*  {tic[2][0]}  |  {tic[2][1]}    |  {tic[2][2]}   *\n"
"*******************\n")
    

def player_input(X):
    print(f"player {X} turn ")
    r=int(input("enter row : "))
    c=int(input("enter column : "))
    tic[r-1][c-1]=X


def check_win():
    if tic[0][0]==tic[0][1]==tic[0][2]:
        return tic[0][0]
    elif tic[1][0]==tic[1][1]==tic[1][2] : 
        return tic[1][0] 
    elif tic[2][0]==tic[2][1]==tic[2][2]:
        return tic[2][0]
    elif tic[0][0]==tic[1][0]==tic[2][0] : 
        return tic[0][0]
    elif tic[0][1]==tic[1][1]==tic[2][1] :
        return tic[0][1] 
    elif tic[0][2]==tic[1][2]==tic[2][2]:
        return tic[0][2]
    elif tic[0][0]==tic[1][1]==tic[2][2]:
        return tic[0][0]
    elif tic[0][2]==tic[1][1]==tic[2][0]:
        return tic[2][0]
    else: 
        return "draw"
    

def play():
    count=0
    while True:
        display_board()
        player_input("X")
        no=check_win()
        display_board()
        if no=="draw"and count==4:
            return no
        elif no=="X" or no=="O":
            return no
        player_input("O")
        on=check_win()
        display_board()
        if on=="draw"and count==4:
            return on
        elif on=="X" or on=="O":
            return on
        
        count +=1



play()
