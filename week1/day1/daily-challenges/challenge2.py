user_word = input('Enter your word: ')

seen = ''
new_word = ''
for c in user_word:
  if c != seen:
    new_word += c
    seen = c

print(new_word)