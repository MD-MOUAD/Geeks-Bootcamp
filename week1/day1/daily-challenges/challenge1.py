# Challenge 1
# Ask the user for a number and a length.

number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples_list = []
for i in range(length):
  multiples_list.append(number * (i + 1))

print(multiples_list)
