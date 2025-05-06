# Challenge 1
# Ask the user for a number and a length.

number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Create a list of multiples of the number
multiples_list = []
for i in range(length):
  multiples_list.append(number * (i + 1))

# number * i for i in range(1, length + 1)

# Print the list of multiples
print(multiples_list)
