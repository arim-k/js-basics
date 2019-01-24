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
const numbers = [1, 2, 3];
numbers.join(',');

const message = 'This is my first message';
const parts = message.split(' ');

const combined = parts.join('-');

// 12-Sorting Arrays
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [{ id: 1, name: 'Node.js' }, { id: 2, name: 'javascript' }];
courses.sort(function(a, b) {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();

	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
});
console.log(courses);

// 13-Testing the Elements of an Array
// every(), some()
const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value) {
	return value >= 0;
});
console.log(allPositive);

const atLeastOnePositive = numbers.some(function(value) {
	return value >= 0;
});
console.log(atLeastOnePositive);

// 14-Filtering an Array
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => {
	n >= 0;
});

console.log(filtered);

// 15-Mapping an Array
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = items.join();
console.log(html);
