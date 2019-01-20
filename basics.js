// 1-Variables
let name = 'Arim';
console.log(name);

// Cannnot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hypen (-)
// Are case-senseitive

// 2-Constants
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// 3-Primitive Types // Value Types
let name = 'Arim'; // String Literal
let age = 31; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // undefined is actually type, but also value
let selectedColor = null; // null;

// 4-Dynamic Typing
//can change type

// 5-Objects
// Reference Types - Object, Array, Function

// curly braces is object literal
let person = {
  name: 'Arim', // key: value
  age: 31
};
//console.log(person);

// Dot Notation
person.name = 'Karlie';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

// 6-Arrays , array is object
// square bracket = array literals, and indicated empty array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

// 7-Functions 8-Types of Functions

// difference between parameters and arguments
// parameter is time of the decoration
// argument is actual value with supply of the parameter

// Perfoming a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);
