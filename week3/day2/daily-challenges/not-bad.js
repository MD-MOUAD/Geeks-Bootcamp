let sentence = "The movie is not that bad, I like it";

let Not = sentence.indexOf("not");
let Bad = sentence.indexOf("bad");

if (Not !== -1 && Bad !== -1 && Bad > Not) {
  let beforeNot = sentence.slice(0, Not);
  let afterBad = sentence.slice(Bad + 3);
  let result = beforeNot + "good" + afterBad;
  console.log(result);
} else {
  console.log(sentence);
}
