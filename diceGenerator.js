const crypto = require("crypto");

function rollDice() {

  return crypto.randomInt(1, 7);
}

console.log("--- Single Dice Roll ---");
console.log(`Dice Rolled: ${rollDice()}`);

console.log("\n--- Simulating 5 Dice Rolls ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Roll ${i}: ${rollDice()}`);
}