const askNumber = () => {
  let userInput = prompt("Enter a number:");
  let number = Number(userInput);

  while (typeof number === "number" && number < 10) {
    userInput = prompt("Number too small. Try again:");
    number = Number(userInput);
  }

  alert("Thanks! You entered a number ≥ 10.");
};
