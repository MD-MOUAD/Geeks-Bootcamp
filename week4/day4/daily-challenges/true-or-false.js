const allTruthy = (...args) => {
  return args.reduce((acc, curr) => acc && !!curr, true);
};

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
