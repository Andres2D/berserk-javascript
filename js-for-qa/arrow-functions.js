// Arrow functions

// Traditional function
function fullName(name, surname) {
  console.log('Hi, mi name is ' + name + ' ' + surname);
};

// fullName('Andres', 'Alcaraz');

// Arrow function - Alternative
const fullNameArrow = (name, surname) => {
  console.log('Hi, mi name is ' + name + ' ' + surname);
};

// fullNameArrow('Andres', 'Alcaraz');

// Arrow function don't have their own binding to this, should not be used as methods

// Traditional method
const student = {
  name: 'Andres',
  average: 5.0,
  getInfo: function() {
    return this.name + ' -> ' + this.average;
  },
  getInfoArrow: () => {
    return this.name + ' -> ' + this.average;
  }
}

// console.log(student.getInfo());
// console.log(student.getInfoArrow());

// Syntax
// Not repeated parameters

// Traditional
function sum(a, a, b) {
  console.log(a+b);
}
// sum(1, 2);


// Arrow
// const sumArrow = (a, a, b) => {
//   console.log(a + b);
// }
// sumArrow(1,2);


// Parameters

// no parameters
const action = () => console.log('No parameters');
action();

// single parameter
const actionTwo = key => console.log('key: ', key);
actionTwo('123');

// Multiple parameters
const actionThree = (p1, p2) => console.log(p1, p2);
actionThree(1,2);
