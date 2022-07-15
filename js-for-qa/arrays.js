// Arrays

// Arrays are ordered collection of data, were we can store any kind of data
// Creation of an array
let collection = [];
// console.log(collection);

// storing data in an array
collection = ['a', 'b', 'c'];
// console.log(collection);

// different kind of data that could be stored
let madArray = [23, '40', false, 3.4, [3, 4, 'hi'], { id: '1', text: 'Andres'}];
// console.log(madArray);

let programmingLanguages = ['C++', 'Java', 'Javascript', 'C#', 'PHP'];

// The length property, gets the quantity of items in the array
console.log(programmingLanguages.length);

// Getting data
// Get from position
console.log(programmingLanguages[0]);

// Getting the last item error
console.log(programmingLanguages[6]);

// Getting last position correct
console.log(programmingLanguages[programmingLanguages.length - 1]);

// Methods
// push: push a new value at the end and returns the new length
programmingLanguages.push('SQL');
console.log(programmingLanguages);

// unshift: add one or more values at the beginning of the array 
programmingLanguages.unshift('MYSQL');
console.log(programmingLanguages);

// pop: remove the last element of an array and returns the removed value
programmingLanguages.pop();
console.log(programmingLanguages);

// findIndex
// forEach
// map
// includes
// sort

