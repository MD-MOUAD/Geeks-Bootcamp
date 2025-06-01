// 🌟 Exercise 1 : Scope

// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1
funcOne(); // will alerts 'inside the funcOne function 3'

// #1.2 - const variables can't be reassigned after declaration, so it will throw an error when trying to reassign a = 3

// #2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // will alerts 0
funcTwo(); // will sets a = 5
funcThree(); // will alerts 5

// #2.2 - funcTwo() will cause an error because we can't reassign a const.

// #3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour(); // sets window.a = "hello"
funcFive(); // will alert "inside the funcFive function hello"

// #4
let a2 = 1;
function funcSix() {
  let a2 = "test";
  alert(`inside the funcSix function ${a2}`);
}

// #4.1
funcSix(); // alerts 'inside the funcSix function test'

// #4.2
// It will work the same, (different scope)

// #5
let a3 = 2;
if (true) {
  let a3 = 5;
  alert(`in the if block ${a3}`);
}
alert(`outside of the if block ${a3}`);

// #5.1
// alerts in the if block 5 then alerts outside of the if block 2

// #5.2
// The same result as long as we don't reassign a3 inside or outside if block.

// 🌟 Exercise 2 : Ternary operator
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // 10

// 🌟 Exercise 3 : Is it a string ?
const isString = (value) => typeof value === "string";

console.log(isString("hello")); // true
console.log(isString([1, 2, 4, 0])); // false

// 🌟 Exercise 4 : Find the sum
const sum = (a, b) => a + b;

// 🌟 Exercise 5 : Kg and grams

function weightToGrams(weightKg) {
  return weightKg * 1000;
}
console.log(weightToGrams(2)); // 2000

const weightToGrams2 = function (weightKg) {
  return weightKg * 1000;
};
console.log(weightToGrams2(2)); // 2000

// Function declarations are hoisted but function expressions are not.

const weightToGrams3 = (weightKg) => weightKg * 1000;
console.log(weightToGrams3(2)); // 2000

// 🌟 Exercise 6 : Fortune teller

(function (kids, partner, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partner} with ${kids} kids.`;
  document.body.innerHTML += `<p>${message}</p>`;
})(4, "Aya", "NewYork", "Software Engineer");

// 🌟 Exercise 7 : Welcome

(function (userName) {
  const navbar = document.querySelector(".navbar");
  navbar.innerHTML += `
    <div>
      <img src="https://avatars.githubusercontent.com/u/125469605?v=4&size=64" alt="profile picture">
      <span>${userName}</span>
    </div>
  `;
})("mouad-khanouch");

// 🌟 Exercise 8 : Juice Bar

// Part I
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  addIngredients("apple", "banana", "orange");
}

makeJuice("large");

// Part II
function makeJuice(size) {
  let ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  addIngredients("apple", "banana", "orange");
  addIngredients("pineapple", "mango", "lemon");
  displayJuice();
}

makeJuice("medium");
