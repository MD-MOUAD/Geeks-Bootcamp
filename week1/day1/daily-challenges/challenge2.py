user_word = input('Enter your word: ')

seen = []
new_word = ''
for char in user_word:
  if char not in seen:
    new_word += char
    seen.append(char)

print(new_word)