const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const secretName = names
//   .map(name => name[0])
//   .sort()
//   .join("");

const letterArray = [];
for (const name of names) {
  letterArray.push(name[0]);
}

const secretName = letterArray.sort().join("");

console.log(secretName);
