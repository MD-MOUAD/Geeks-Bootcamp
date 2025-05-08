from random import randint


def guess_number(number):
    random_number = randint(1, 100)
    if random_number == number:
        print('That is the correct number!')
    else:
        print(f'{number} is not the correct number. \
              The correct number is {random_number}')


number = int(input('Enter a number between 1 and 100: '))
guess_number(number)
