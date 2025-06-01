// Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange) {
  const change = [0.25, 0.1, 0.05, 0.01];
  let total = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * change[i];
  }
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
