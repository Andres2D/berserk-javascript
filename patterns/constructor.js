
// 1] The object creation

const book = {}; // {}

book.title = 'Homo Deus';
const title = book.title; // Homo Deus

book['author'] = 'Noah';
const author = book['author']; // Noah

// =======================
const bookCreate = Object.create(Object.prototype); // {}

Object.defineProperty(bookCreate, 'title', {
  value: 'Sapiens',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperties(bookCreate, {
  author: {
    value: 'Noah',
    writable: true
  },
  year: {
    value: 2015,
    writable: false
  }
});

const titleCreate = bookCreate.title;
const authorCreate = bookCreate['author'];


const bookObj = new Object(); // {}

// 2] Constructors

class Cube {
  constructor(model, year, category) {
    this.model = model;
    this.year = year;
    this.category = category;
  }

  toString() {
    return `Cube ${this.model}-${this.category} created in ${this.year}`;
  }
}

const gan = new Cube('3x3x3', 2020, 'Puzzle');
const mirror = new Cube('3x3x3', 2018, 'Puzzle Colorless');

console.log(gan.toString()); // Cube 3x3x3-Puzzle created in 2020
console.log(mirror.toString()); // Cube 3x3x3-Puzzle Colorless created in 2018

// =============================

// 3] Constructor prototypes

class Person {
  constructor(name, birthday, gender) {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
  }
}

Person.prototype.toString = function() {
  return `The birthday of ${this.name} is in ${this.birthday}`;
}

const andres = new Person('Andres', '12 Jun', 'M');
const daniela = new Person('Daniela', '10 Aug', 'F');

console.log(andres.toString()); // The birthday of Andres is in 12 Jun
console.log(daniela.toString()); // The birthday of Daniela is in 10 Aug
