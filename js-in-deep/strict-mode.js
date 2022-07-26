'use strict'
// Preventing the creation of global variables accidentally
// badVariable = 1;

// let description = 'This is a description';

// if(true) {
//   descriptino = 'Empty description';
// }

// console.log(description);
// console.log(descriptino);

// Invalid operations

// const user = {
//   id: '908080'
// };

// Object.preventExtensions(user);

// user.role = 'Admin';
// console.log(user);

// Other example
let obj = {
  get objId() {
    return '10';
  }
};

// obj.objId = 9;
// console.log(obj.objId);

// Deleting an undeletable property
// delete Array.prototype;
// console.log(Array.prototype);

// duplicated parameters names
// function sum(a, b, a) {
//   return a+b;
// }

// console.log(sum(2,3,4));


//With
// var car = {
//   model: 'sd'
// }

// var reference = '454365165';

// with(car) {
//   reference;
//   console.log(reference);
// }

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

// // free functions
// const student = {
//   id: '1010',
//   name: 'Andres',
//   getName: function() {
//     return `Student: ${this.name}` // undefined.name
//   }  
// }

// console.log(student.getName());

// const studentName = student.getName;
// console.log(studentName());

// Scope of functions
if(true) {
  function mainAction() { console.log('Action') }
  mainAction();
}
