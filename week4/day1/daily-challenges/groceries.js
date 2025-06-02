let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Q1
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();

// Q2
const cloneGroceries = () => {
  let user = client; // Pass by value

  client = "Betty";
  console.log("user after client change:", user); // "John"
  // Primitive types (string, number, boolean) are passed by value. Changing client after copying to user won’t affect user

  let shopping = groceries; // Pass by reference (object)

  // Objects and arrays are passed by reference.
  // shopping and groceries point to the same object
  shopping.totalPrice = "35$";
  console.log("groceries.totalPrice:", groceries.totalPrice); // "35$"

  shopping.other.paid = false;
  console.log("groceries.other.paid:", groceries.other.paid); // false
};

cloneGroceries();
