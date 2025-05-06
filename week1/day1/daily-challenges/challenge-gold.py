from datetime import datetime
age = input("enter your date of birth in the format dd/mm/yyyy: ")
age = age.split("/")
day = int(age[0])
month = int(age[1])
year = int(age[2])

birthdate_str = f"{year}-{month:02d}-{day:02d}"
birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d").date()
today = datetime.today().date()
age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
age = str(age)
number_of_candles = int(age[-1])
print(number_of_candles)
number_of_dushes = int(((11 - number_of_candles) / 2))
x = 0
if number_of_candles % 2 == 0:
    x = 1
cake = f"""
     {"_" *number_of_dushes}{"i" * number_of_candles}{"_" * (number_of_dushes + x)}
    |:H:a:p:p:y:|
  __|___________|__
 |^^^^^^^^^^^^^^^^^|
 |:B:i:r:t:h:d:a:y:|
 |                 |
 ~~~~~~~~~~~~~~~~~~~
"""

print(cake)
if(year%4 == 0 and year%100 != 0):
	print(cake)