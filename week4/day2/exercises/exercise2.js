// 🌟 Exercise 2 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let ord = index < 3 ? ordinal[index + 1] : ordinal[0];
  console.log(`${index + 1}${ord} choice is ${color}.`);
});
