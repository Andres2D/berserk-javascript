/**
 * Classically, Decorators offered the ability to add behaviour 
 * to existing classes in a system dynamically
 * 
 */

// Creating a base class with some default properties
class Base {
  constructor(name) {
    this.name = name;
    this.status = 'Not available',
    this.task = [];
  }
}

// Instancing the base class
const test = new Base('Andres');
console.log(test);

// Creating a new instance to add decorators
const testDecorator = new Base('Steve');

// Add an address decorator
testDecorator.setAddress = (address) => {
  this.address = address;
}

// Add a role decorator
testDecorator.setRole = (role) => {
  this.role = role;
}

// Using the new decorators
testDecorator.setAddress('Street 13');
testDecorator.setRole('Admin');

console.log(testDecorator);

// Creating a new instance to check no override
const noOverride = new Base('Angela');
console.log(noOverride);
