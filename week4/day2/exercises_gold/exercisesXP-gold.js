// Exercise 1 : Analyzing the map method

[1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});
// -> [2, 4, 6]

// Exercise 2: Analyzing the reduce method
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// initial value: [1, 2]
// iteration 1: [1, 2].concat([0, 1]) -> [1, 2, 0, 1]
// iteration 2: [1, 2, 0, 1].concat([2, 3]) -> [1, 2, 0, 1, 2, 3]
// result -> [1, 2, 0, 1, 2, 3]


// Exercise 3 : Analyze this code

// i is the index of the current element num of arrayNum
// i will be -> 0, 1, 2, 3, 4, 5

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})

// Exercise 4: Nested arrays flatten

// 1 
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
result = (function (array) {return array.flat(2)})(array)
console.log(result) // -> [1, 2, 3, [4], [5]]

// 2
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const modifyGreeting = (greetingArray) => {
  return greetingArray.map(subArray => subArray.join(" "));
};

console.log(modifyGreeting(greeting)); // ["Hello young grasshopper!", "you are", "learning fast!"]

// 3 :
const greetingStr = greeting.flat().join(" ");
console.log(greetingStr);

// 4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log("Exercise 4.4 Output:", trapped.flat(Infinity));
