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
// console.log(programmingLanguages.length);

// Getting data
// Get from position
// console.log(programmingLanguages[0]);

// Getting the last item error
// console.log(programmingLanguages[6]);

// Getting last position correct
// console.log(programmingLanguages[programmingLanguages.length - 1]);

// Methods
// push: push a new value at the end and returns the new length
// programmingLanguages.push('SQL');
// console.log(programmingLanguages);

// unshift: add one or more values at the beginning of the array 
// programmingLanguages.unshift('MYSQL');
// console.log(programmingLanguages);

// pop: remove the last element of an array and returns the removed value
// programmingLanguages.pop();
// console.log(programmingLanguages);

// forEach: iterate an array
// programmingLanguages.forEach((language) => {
//   console.log(language + ' ###### ');
// });

// map: iterate an array an return a new array
// const ages = [2, 4, 6, 8];

// const newAges = ages.map((age) => {
//   return age + 2;
// });

// console.log(ages);
// console.log(newAges);

// includes: returns a boolean
// console.log(programmingLanguages.includes('Python'));
// console.log(programmingLanguages.includes('C#'));

// filter: receives a callback with the condition to filter
// const ages = [2, 3, 45, 12, 13, 90];
// const pairAges = ages.filter(a => a % 2 === 0);
// console.log(ages);
// console.log(pairAges);

// sort
// const unsortedList = [5, 4, 3, 5, 1, 0];
// const sortedList = [5, 4, 3, 5, 1, 0].sort();

// console.log(unsortedList);
// console.log(sortedList);

// const names = ['Andres', 'Jose', 'Camila', 'Bernal'];
// console.log(names.sort());


// Creating an array with a constructor function
// const newArr = new Array(1,2,3,4);
// console.log(newArr);

// Ejercicio
const employee = ['Juan', 'Angela', 'Carlos', 'Daniela'];
const role = ['CEO', 'CTO', 'DEV', 'DEV'];
const seniority = [5, 10, 4, 2];
/**
 * La información de cada empleado esta fijado a la posición de cada arreglo:
 * Ej:  Juan -> CEO -> 5
 * 
 * */

/**
 * 
 * Con los arreglos definidos realizar los siguentes programas
 * 
 * 1] Escribir un programa que imprima la información completa por empleado
 *  Ej: (Juan) es el/la (CEO) y tiene (5) años de experiencia
 * 
 * 2] Escribir un programa el nombre y el cargo el empleado con mas experiencia
 * 
 * 3] Agregar los siguientes empleados al final de cada arreglo
 * 
 * Juanita -> DEV -> 2 años
 * Sebastian -> Tech Lead -> 3 años
 * Santiago -> DEV -> 0 años
 * 
 */

