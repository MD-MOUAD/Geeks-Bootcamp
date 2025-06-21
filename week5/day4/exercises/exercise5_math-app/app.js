const _ = require("lodash");
const { add, multiply } = require("./math");

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 6));

const nums = [10, 5, 3, 8];
console.log("Max:", _.max(nums));
