// Creating a global variable accidentally
badVariable = 1;

// let description = 'This is a description';

// if(true) {
//   descriptino = 'Empty description';
// }

// console.log(description);
// console.log(descriptino);
// console.log(global.descriptino);


// Invalid operations

// preventing extensions
const user = {
  id: '908080'
};

Object.preventExtensions(user);

user.role = 'Admin';
console.log(user);

// Other example
let obj = {
  get objId() {
    return '10';
  }
};

obj.objId = 9;
// console.log(obj.objId);

// Deleting an undeletable property
delete Array.prototype;
// console.log(Array.prototype);

delete global;


// duplicated parameters names
function sum(a, b, a) {
  return a+b;
}

// console.log(sum(2,3,4));

// Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.
//https://blog.logrocket.com/anomalies-in-javascript-arrow-functions/
// const sumTwo = (a, b, a) => {
//   return a+b;
// };
 
// Using with
// It is impossible to know if reference is for car or if is form the let var
// without execute the code, so for performance, strict mode disallow with
var car = {
  // reference: 'Ford',
  model: '2019'
}

let reference = '454365165';

with(car) {
  reference = '0';
  // console.log(reference);
}

// console.log(reference);


// reserved words
// let implements = 0; 
// let package = 0; 
// let public = 0; 
// let interface = 0; 
// let static = 0; 
// let private = 0; 
// let protected = 0; 
// let yield = 0; 
// let let = 0; 


// free functions
const student = {
  id: '1010',
  name: 'Andres',
  getName: function() {
    return `Student: ${this.name}` // window.name / global.name 
  }  
}

console.log(student.getName());

const studentName = student.getName;
console.log(studentName());

