import chalk from "chalk";

console.log(chalk.blue("This message is blue!"));
console.log(chalk.red.bold("This is bold and red!"));
console.log(chalk.greenBright("Bright green success message!"));

console.log(chalk.yellow.bgMagenta.underline("Warning: Styled text!"));

const user = "Alice";
console.log(chalk.cyan(`Hello, ${user}!`));

console.log(chalk.rgb(255, 136, 0).bold("Custom orange color!"));
