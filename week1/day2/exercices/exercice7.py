import random

def get_random_temp(season):
    if season == "winter":
        temp = random.uniform(-10, 16)
    elif season == "spring":
        temp = random.uniform(10, 24)
    elif season == "summer":
        temp = random.uniform(20, 40)
    elif season == "autumn" or season == "fall":
        temp = random.uniform(5, 20)
    else:
        temp = random.uniform(-10, 40)  # fallback if season is unknown
    return round(temp, 1)

def month_to_season(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        return None

def main():

    month = int(input("Enter the number of the month (1 = January, 12 = December): "))
    season = month_to_season(month)
    if season is None:
        print("Invalid month. Please enter a number between 1 and 12.")
        return

    temperature = get_random_temp(season)
    print(f"The temperature right now is {temperature}°C.")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temperature <= 23:
        print("Nice and cool. Maybe a light jacket would be good.")
    elif 24 <= temperature <= 32:
        print("Warm weather! Stay hydrated.")
    elif temperature > 32:
        print("It's hot! Make sure to drink plenty of water and avoid the sun.")

main()
