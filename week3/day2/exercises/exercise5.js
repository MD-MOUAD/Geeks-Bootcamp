const family = {
  mother: "Doae",
  father: "Achraf",
  son: "Oussama",
  daughter: "Noussayba",
};

const keys = [];
for (const key in family) {
  keys.push(key);
}

const values = [];
for (const key in family) {
  values.push(family[key]);
}
console.log("Keys: ", keys.join(", "));
console.log("Values: ", values.join(", "));
