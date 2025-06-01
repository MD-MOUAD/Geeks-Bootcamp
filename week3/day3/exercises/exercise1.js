// Exercise 1 : Find the numbers divisible by 23
// Without Parameter

const displayNumbersDivisible = () => {
  let sum = 0;
  const divisibleBy23 = [];
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      divisibleBy23.push(i);
      sum += i;
    }
  }
  console.log("Outcome:", ...divisibleBy23);
  console.log("Sum:", sum);
};

displayNumbersDivisible();

// With Parameter
console.log("*** with parameter ***");
const displayNumbersDivisible2 = (divisor) => {
  let sum = 0;
  const multiples = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      multiples.push(i);
      sum += i;
    }
  }
  console.log("Outcome", ...multiples);
  console.log("Sum:", sum);
};

displayNumbersDivisible2(45);
