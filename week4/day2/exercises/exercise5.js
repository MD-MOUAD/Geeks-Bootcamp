// 🌟 Exercise 5 : Star Wars
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const story = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(story);
