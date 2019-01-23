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
numbers.indexOf(1) !== -1 // true
numbers.includes(1) //true
numbers.indexOf(1, 2);

// 4-Finding customElements(Reference Types)
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},  
];

courses.includes({id:1, name:'a'}); // false - two different object, different location, memory

// two difeerent references need to use find method
courses.find({})