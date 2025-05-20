const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

result = [];
for (const key in details) {
  result.push(key);
  result.push(details[key]);
}
console.log(result.join(" "));
