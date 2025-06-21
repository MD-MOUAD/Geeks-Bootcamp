import fs from "fs/promises";

export async function displayFileContent() {
  try {
    const content = await fs.readFile("./files/file-data.txt", "utf8");
    console.log("File content:");
    console.log(content);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}
