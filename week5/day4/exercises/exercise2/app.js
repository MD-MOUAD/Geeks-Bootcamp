import { people } from "./data.js";

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / persons.length;
  console.log(`Average Age: ${average.toFixed(1)}`);
}

calculateAverageAge(people);
