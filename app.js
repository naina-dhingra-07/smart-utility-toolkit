const isEven = require("./isEven");

const testNumbers = [4, 7, 12, 15, 0];

console.log("Testing Custom Module: isEven");
testNumbers.forEach((num) => {
  console.log(`Is ${num} even? -> ${isEven(num)}`);
});