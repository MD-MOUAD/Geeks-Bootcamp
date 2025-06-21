import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function validateName() {
  const name = await rl.question(
    "Enter your full name (example: “John Doe”): "
  );
  const isValid = /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(name);

  if (isValid) {
    console.log("Valid name!");
  } else {
    console.log(
      'Invalid name. Format: "FirstName LastName" (letters only, 1 space)'
    );
  }
  rl.close();
}

validateName();
