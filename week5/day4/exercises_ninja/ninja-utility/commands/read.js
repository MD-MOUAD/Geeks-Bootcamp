import fs from "fs/promises";

export const readFile = async (filename = "package.json") => {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log("File Content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
};
