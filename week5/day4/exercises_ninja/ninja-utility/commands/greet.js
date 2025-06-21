import chalk from "chalk";

export const greet = () => {
  console.log(chalk.blue.bold("=== Ninja Cli ==="));
  console.log(chalk.green("Hello, Ninja!"));
  console.log(chalk.yellow("Welcome to the CLI Utility!"));
};
