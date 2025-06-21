const fs = require("fs");

const data = fs.readFileSync("source.txt", "utf8");
fs.writeFileSync("destination.txt", data, "utf8");
console.log("Copied successfully!");
