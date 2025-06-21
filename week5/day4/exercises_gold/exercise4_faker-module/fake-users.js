import { faker } from "@faker-js/faker";
import inquirer from "inquirer";

const users = [];

export function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    address: {
      street: faker.location.streetAddress(),
      country: faker.location.country(),
    },
  };
  users.push(user);
  console.log("Added fake user:", user);
}

export async function addRealUser() {
  const answers = await inquirer.prompt([
    { type: "input", name: "name", message: "Enter your name:" },
    { type: "input", name: "street", message: "Enter your street:" },
    { type: "input", name: "country", message: "Enter your country:" },
  ]);

  const user = {
    name: answers.name,
    address: {
      street: answers.street,
      country: answers.country,
    },
  };
  users.push(user);
  console.log("Added real user:", user);
}
