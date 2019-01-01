// 1- Max of Two Numbers
// Write a function that takes two numbers and returns the maximum of the two.

let number = max(1, 2);
console.log(number);

function max(number1, number2) {
  // if (number1 > number2) return number1;
  // return number2;

  return number1 > number2 ? number1 : number2;
}

// 2-Landscape of Portrait
console.log(isLandscape(800, 600));
function isLandscape(width, height) {
  // return width > height ? true : false; // ugly~
  return width > height;
}

// 3-FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number = > 'Not a number'

const output = fizzBuzz(7);
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0 && input * 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

//4-Demerit Points

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3);
// 12 points -> suspended

checkSpeed(180);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

// 5-Even and Odd Numbers
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");

    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// 6-Count Truthy
const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// 7-String Properties
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b"
};

showProperties(movie);
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

// 8-Sum of Multiples of 3 and 5
console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 9-Grade
const array = [80, 80, 50];
console.log(calculateGrade(array));

// better way
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

// 10-Stars
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

// 11-Prime Numbers
// Prime (whose factors are only 1 and itself)
// Composite
// 12 = 1, 2, 3, 4, 6, 12
// Can be devided evenly by its factors

showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    // 2 - current(i)
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}
