// 2-Adding Elements
const numbers = [3, 4];
// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

// 3-Finding Elements(Primitives)
const numbers = [1, 2, 3, 4];
numbers.indexOf('1'); // -1
numbers.lastIndexOf(3); // 2
numbers.indexOf(1) !== -1; // true
numbers.includes(1); //true
numbers.indexOf(1, 2); // -1

// 4-Finding customElements(Reference Types)
const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

courses.includes({ id: 1, name: 'a' }); // false - two different object, different location, memory

// two difeerent references need to use find method
const course = courses.find(function(course) {
  return course.name === 'b';
});

const course = courses.findIndex(function(course) {
  return course.name === 'a';
});

// 5-Arrow Functions
const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

const course = courses.find(course => course.name === 'a');

// 6-Removing Elements
const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();

// Beginning
const first = numbers.unshift();

//Middle
numbers.splice(2, 1);

// 7-Emptying an Array
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
numbers = [];
console.log(numbers);

// Solution 2
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

// Solution 4
while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);
console.log(another);

// 8-Combinding and Slicing Arrays
const first = [{ id: 1 }];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2, 4);
const slice2 = combined.slice(); // copy

console.log(combined);
console.log(slice);

// 9-The Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];
// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

const copy = combined.slice();
const copy = [...combined];

// 10-Iterating an Array
const numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

// forEach takes second parameter with index !!
numbers.forEach((number, index) => {
  console.log(number, index);
});

// 11-Joining Arrays
