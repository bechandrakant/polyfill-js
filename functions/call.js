Function.prototype.myCall = function (...args) {
  let context = args[0];
  let functionCopy = this;

  return functionCopy.apply(context, [...args.slice(1)]);
};

let player1 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function printFullName(city, state) {
  return this.firstName + " " + this.lastName + " from " + city + ", " + state;
}

console.log(printFullName.call(player1, "mumbai", "maharashtra"));
console.log(printFullName.myCall(player1, "mumbai", "maharashtra"));
