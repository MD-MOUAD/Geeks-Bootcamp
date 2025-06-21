import { program } from "commander";
import { greet } from "./commands/greet.js";
import { fetchData } from "./commands/fetch.js";
import { readFile } from "./commands/read.js";

program
  .command("greet")
  .description("Display a colorful greeting")
  .action(greet);

program
  .command("fetch")
  .description("Fetch data from an API")
  .action(fetchData);

program
  .command("read")
  .description("Read a file (default: package.json)")
  .argument("[filename]", "File to read")
  .action(readFile);

program.parse(process.argv);
