// 17-Array from Range
const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {
	const output = [];
	for (let i = min; i <= max; i++) {
		output.push(i);
	}
	return output;
}

// 18-Includes
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(2));
console.log(includes(numbers, 1));

function includes(array, searchElement) {
	for (let element of array) {
		if (element === searchElement) return true;
		return false;
	}
}

// 19-Except
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);
console.log(output);

function except(array, excluded) {
	const output = [];
	for (let element of array) {
		if (excluded.includes(element)) {
			output.push(element);
		}
		return output;
	}
}

// 20-Moving an Element
const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, -2);

console.log(output);

function move(array, index, offset) {}
