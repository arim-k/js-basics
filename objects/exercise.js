// 15-Address Object 
//street, city. zipcode - showAddress

let address = {
  street: 'aaa',
  city: 'bbb',
  zipcode: 'ccc'
};

function showAddress() {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

// 16-Factory and Constructor Functions 
let address = {
  street: 'aaa',
  city: 'bbb',
  zipcode: 'ccc'
};

// Factory
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode  
  };
}

const myAddress = address(1,2,3);
console.log(myAddress);

// Constructor
function Address() {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const newAddress = new Address();
console.log(newAddress);

// 17-Object equality

// objects are reference types, so different memory 
let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');
let address3 = address1;

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

// return true
function areEqual(address1, address2) {
  return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode; 
}

// return false
function areSame(address1, address2) {
  return address1 === address2 
}

// 18-Blog Post Object
// title, body, author, views, comments(author,body), isLive
let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    {author: 'a', body: 'b' },
    {author: 'a', body: 'b' }
  ],
  isLive : true
};

console.log(post);

// 19-Constructor Functions // 아직 요소들이 정해지지 않았을 때! 사용 
let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    {author: 'a', body: 'b' },
    {author: 'a', body: 'b' }
  ],
  isLive : true
};

let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}

// 20-Price Range Object
let priceRanges = [
  {label: '$', tooltipo: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
  {label: '$$', tooltipo: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
  {label: '$$$', tooltipo: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
]

let restaurants = [
  {averagePerPerson: 5}
]

