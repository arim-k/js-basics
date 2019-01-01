// 6-Ternary Operator
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// 7-Logical Operators
console.log(false && true); // both
console.log(false || true); // or (It doesn't matter which of is true)

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

let applicationRefuse = !eligibleForLoan;

console.log("Applicatino Refused", applicationRefuse);

// 8-Logical Operators with Non-booleans
// Falsy (false)
// undefined, null, 0, false, '', NaN

// Anything that is not Falsy => Truthy

// Short-circuiting
false || 1 || 2; // return 1

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor); // return userColor, if undefined return defaultColor

// 9-Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000
console.log(1 | 2); // Bitwise or
console.log(1 & 2); // Bitwise and

// Read, Write, Execute
// 00000100 read
// 00000110 write
// 00000111 execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);

// 10-Operators Precedence
let x = (2 + 3) * 4;
console.log(x);
