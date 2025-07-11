// Exercise 1 : print Full Name

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(printFullName({ first: "Elie", last: "Schoppik" }));

// Exercise 2 : keys and values

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);
  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// Exercise 3 : Counter class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

const counterTwo = counterOne;
counterTwo.increment(); // count = 3 (same object reference)

console.log(counterOne.count);
// Output --> 3
