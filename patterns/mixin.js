/**
 * 
 * Mixins assist in decreasing functional repetition and increasing 
 * function re-use in a system. Where an application is likely to 
 * require shared behaviour across object instances, we can easily avoid 
 * any duplication by maintaining this shared functionality in a Mixin 
 * and thus focusing on implementing only the functionality in our system 
 * which is truly distinct.
 * 
 */

// The Mixin base
const Mixin = superclass => 
  class extends superclass {
    commonMethodOne() {
       console.log('This is a common method');
    }
    
    commonMethodTwo() {
       console.log('This is another common method');
    }
  };

// Defining a class
class Example {
  constructor({name, operation}) {
    this.name = name;
    this.operation = operation;
  }
}

// Using the mixin
class MyExample extends Mixin(Example) {}

const test = new MyExample({
  name: 'Example',
  operation: 'Execute'
});

test.commonMethodOne();
test.commonMethodTwo();

// Using the Mixin for another instance
const testTwo = new MyExample({
  name: 'Test',
  operation: 'Run'
});

testTwo.commonMethodOne();
testTwo.commonMethodTwo();
