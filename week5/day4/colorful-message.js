import chalk from "chalk";

export function displayColorfulMessage() {
  console.log(chalk.blue.bold("This is an important message!"));
  console.log(chalk.green.underline("Node.js is awesome!"));
  console.log(chalk.yellow.bgRed("Warning: Challenge in progress"));
}
