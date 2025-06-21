import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "data", "example.txt");

export function getFileInfo() {
  const exists = fs.existsSync(filePath);
  if (!exists) {
    console.log("File does not exist.");
    return;
  }

  const stats = fs.statSync(filePath);
  console.log("File exists:", exists);
  console.log("File size (bytes):", stats.size);
  console.log("Created at:", stats.birthtime);
}
