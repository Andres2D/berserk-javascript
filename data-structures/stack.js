// Stack LIFO

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if(this.items.length === 0) {
      console.error('The stack is empty');
      return false;
    }
    return this.items.pop();
  }

  // Get the top value in the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
  }
}

const carStack = new Stack();
carStack.push('Subaru');
carStack.push('Supra');
carStack.push('Evolution');

console.log(carStack.peek());
console.log(carStack.size());
