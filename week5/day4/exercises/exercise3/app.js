const { readFile, writeFile } = require("./fileManager");

const content = readFile("Hello_World.txt");
console.log("Read:", content);

writeFile("Bye_World.txt", "Writing to the file");
console.log("Write successful!");
