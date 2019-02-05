// 12-Sum of Arguments
console.log(sum([1, 2, 3, 4]));

function sum(...items) {
  // console.log(items);
  if (items.legnth === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

// 13-Area of Circle
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
console.log(circle.area);

// 14-Error Handling
try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid array.');
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
