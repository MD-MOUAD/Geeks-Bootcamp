export function returnNumbers(str) {
  return str.match(/\d/g).join("");
}

console.log(returnNumbers("geeks2025"));
