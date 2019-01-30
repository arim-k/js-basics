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

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];            
  output.splice(index + offset, 0, element);
  return output;
}  

// 21-Count Occurrences
const numbers = [1, 2, 3, 4, 1];
const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
  // let count = 0;
  // for (let element of array) {
  //   if (element === searchElement) {
  //     count++;
  //   }
  //   return count;
  // }

  array.reduce((accumulator,current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;     
  }, 0);
}

// 22-Get Max
const numbers = [1, 2, 3, 4];

const max = getMax([]); // undefined 

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i =1; i < array.length; i++) {
  //   if (array[i] > max) max = array[i];
  // }
  // return max;

  return array.reduce((a, b) => (a > b) ? a : b);
}

// 23-Movies
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
];

// All the movie sin 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their tilte 

const titles = movies
  .filter(m => m.year === 2018 && m.rating >=4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title)

console.log(title);
