// Hashing

// Map Hash
const collection = new Map();
collection.set('Andres', '123');
collection.set('Steve', '221');
collection.set('Nat', '666');

// Getting an element
console.log(collection.get('Nat'));

// Getting the length of the table
console.log(collection.size);

// Iterating a Map
for(let [key, value] of collection) {
  console.log(`${key} ==> ${value}`);
}
