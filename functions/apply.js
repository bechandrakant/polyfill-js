Function.prototype.myApply = function (context, args) {
  let functionCopy = this;
  return functionCopy.call(context, ...args);
};

let player1 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function printFullName(city, state) {
  return this.firstName + " " + this.lastName + " from " + city + ", " + state;
}

console.log(printFullName.apply(player1, ["mumbai", "maharashtra"]));
console.log(printFullName.myApply(player1, ["mumbai", "maharashtra"]));
