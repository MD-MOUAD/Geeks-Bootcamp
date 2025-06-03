// Exercise 1 : Nested functions

let landscape = () => {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4); // "____"
  mountain(4); // "/''''\\"
  flat(4); // "____"

  return result;
};

console.log("Exercise 1 Output:", landscape()); // "____/''''\\____"

// Exercise 2 : Closure

// addTo(10) returns a function y => 10 + y
// addToTen(3) --> 10 + 3 = 13

const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
console.log("Exercise 2 Output:", addToTen(3));

// Exercise 3 : Currying

// curriedSum(30)(1) --> 30 + 1 = 31

const curriedSum = (a) => (b) => a + b;
console.log("Exercise 3 Output:", curriedSum(30)(1));

// Exercise 4 : Currying

// Prediction:
// add5 = curriedSum(5) --> (b) => 5 + b
// add5(12) --> 5 + 12 = 17

const add5 = curriedSum(5);
console.log("Exercise 4 Output:", add5(12));

// Exercise 5 : Composing

// g(a) --> add5(10) = 15
// f(15) --> add1(15) = 16

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const addFive = (num) => num + 5;
console.log("Exercise 5 Output:", compose(add1, addFive)(10));
