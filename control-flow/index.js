// 1-Hour (if else)
let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// 2-Switch...case
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknow User");

// 3-For (Loops)
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// 4-While
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// 5-Do...while
let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5); // condition is at the end

// 6-Infinite Loops

// 7-For...in
const person = {
  name: "Arim",
  age: 31
};
for (let key in person) {
  console.log(key, person[key]);
}
// Dot Notation
person.name;

// Bracket Notation
console.log(person["name"]); // use when we don't know about the what property going to access

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// 8-For...of (ES6)
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// 9-Break and Continue
let b = 0;
while (b <= 10) {
  //if (b === 5) break;
  if (b % 2 === 0) {
    b++;
    continue;
  }
  console.log(b);
  b++;
}
