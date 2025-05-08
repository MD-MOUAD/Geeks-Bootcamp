def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt("M", "Geeks Institute")

make_shirt()

make_shirt("M")

make_shirt("S", "Code like a ninja")


make_shirt(text="Hello World", size="XL")
# shirt = {
#     "text": "Hello World",
#     "size": "XL"
# }
# make_shirt(**shirt)
