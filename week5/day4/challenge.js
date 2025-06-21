import { greet } from "./greeting.js";
import { displayColorfulMessage } from "./colorful-message.js";
import { displayFileContent } from "./read-file.js";

async function runChallenge() {
  console.log(greet("Full Stack Developer"));
  console.log("-----------------------");

  displayColorfulMessage();
  console.log("-----------------------");

  await displayFileContent();
}

runChallenge();
