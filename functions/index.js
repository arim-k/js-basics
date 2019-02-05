// 1-Function Declarations vs Expressions

// Function Declaration
function walk() {
  console.log('walk');
}

// Anonymous Function Expression
// run(); // run is not defined yet // 2-Hoisting
let run = function() {
  console.log('run');
};
let move = run;
run();
move();

// 3-Arguments
function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10));

// 4-The Rest Operator
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

// 5-Default Parameters
function interest(principal, rate, years) {
  // function interest(principal, rate = 3.5, years = 5) {}

  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

// 6-Getters and Setters
const person = {
  firstName: 'Arim',
  lastName: 'Kim',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Smith'; // can't do this, read only

// getters => access properties
// setters => change (mutate) them

console.log(person);

// 7-Try and Catch (error handling)
const person2 = {
  firstName: 'Arim',
  lastName: 'Kim',
  get fullName() {
    return `${person2.firstName} ${person2.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter a first and last name.');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = '';
} catch (e) {
  alert(e);
}

// 8-Local vs Global Scope
const color = 'red';

function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
  if (true) {
    const another = 'bye';
  }
  // console.log(another);
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i);
}

function stop() {
  const message = 'bye';
}
start();

// 9-Let vs Var
// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       let color = 'red';
//     }
//   }
//   console.log(color);
// }

// start();

var color2 = 'red'; // window.color
let age = 30; // window.age

// var => function-scoped
// ES6(ES2015): let, const => block-scoped

// 10-The this Keyword
// The object that is executing the current function.

// method -> obj
// function -> global (window, global node)

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  },
  play() {
    console.log(this);
  }
};

// stop is method of video object
video.stop = function() {
  console.log(this);
};

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('a'); // {} new empty object

video.play();
video.showTags();

// 11-Changing this
// case 1
const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });
  },
  play() {
    console.log(this);
  }
};

video2.showTags();

// case 2
function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: 'Mosh' }, 1, 2);
playVideo.apply({ name: 'Mosh' }, [1, 2]);
playVideo.bind({ name: 'Mosh' })();

playVideo();

const video3 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
  play() {
    console.log(this);
  }
};

video3.showTags();

// case 3
const video4 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  },
  play() {
    console.log(this);
  }
};

video4.showTags();
