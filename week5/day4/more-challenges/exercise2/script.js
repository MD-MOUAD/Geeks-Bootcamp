import { minutesLived } from "./date.js";
import inquirer from "inquirer";

console.log(`Minutes lived: ${minutesLived("1990-01-01")}`);

// Bonus:
async function getUserBirthdate() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "birthdate",
      message: "Enter your birthdate (YYYY-MM-DD):",
      validate: (input) => !isNaN(new Date(input).getTime()) || "Invalid date",
    },
  ]);
  console.log(`Minutes lived: ${minutesLived(answers.birthdate)}`);
}

getUserBirthdate();
