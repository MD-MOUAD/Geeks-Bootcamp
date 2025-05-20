const colors = ["blue", "red", "green", "purple", "orange"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

for (let i = 0; i < colors.length; i++) {
  const number = i + 1;
  const suffix = getSuffix(number);
  console.log(`My ${number}${suffix} choice is ${colors[i]}`);
}

const getSuffix = (n) => {
  if (n === 11 || n === 12 || n === 13) return "th";
  const lastDigit = n % 10;
  if (lastDigit === 1) return "st";
  if (lastDigit === 2) return "nd";
  if (lastDigit === 3) return "rd";
  return "th";
};
