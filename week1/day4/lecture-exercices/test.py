class User1:
    counter = 0 #  class attribute

    def __init__(self, nom):
        self.name = nom # instance attribute
        User1.counter += 1

    def greet(self): # instance method
        print(f"Hello, my name is {self.name}")



# a = User1("John")
# print(a.counter)


# b = User1("ahmed")
# print(a.counter)

# c = User1("youssef")
# print(a.counter)



# day 4

class MyClass:
    def __init__(self, username, password, role):
        self.username = username
        self.__password = password
        self.role = role

    @property
    def password(self):
        return  self.__password

    @password.setter
    def password(self, new_password):
        if self.role == 'admin':
            self.__password = new_password 
        else:
            print('you cannot')
  



m = MyClass("uername", '2345566', 'admin')
print(m.password)
m.password = 'hello'
print(m.password)