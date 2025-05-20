// 🌟 Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// Write code to remove “Greg” from the people array.
people.shift();

// Write code to replace “James” to “Jason”.
people.splice(people.indexOf("James"), 1, "Jason");

// Write code to add your name to the end of the people array.
people.push("Mouad");

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "YourName"];
// Hint: Check out the documentation for the slice method
const newPeople = people.slice(1, -1);
console.log({ people });
console.log({ newPeople });

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// because indexOf returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (const p of people) {
  console.log(p);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (const p of people) {
  console.log(p);
  if (p === "Devon") break;
}
