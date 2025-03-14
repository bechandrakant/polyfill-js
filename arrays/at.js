Array.prototype.myAt = function (index) {
  let array = this;
  return index >= 0 ? array[index] : array[array.length + index];
};

const input = [5, 12, 8, 130, 44];

let index = 2;

// Expected output: "An index of 2 returns 8"
console.log(`An index of ${index} returns ${input.at(index)}`);
console.log(`An index of ${index} returns ${input.myAt(index)}`);

index = -2;

// Expected output: "An index of -2 returns 130"
console.log(`An index of ${index} returns ${input.at(index)}`);
console.log(`An index of ${index} returns ${input.myAt(index)}`);
