// Linked lists

// Singly linked
// Init

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insertion at the end (Push)
  push(value) {
    let newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // Deleting the last element
  pop() {
    if(!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Delete first element, Shift
  shift() {
    if(!this.head) {
      return undefined;
    }

    const current = this.head;
    this.head = current.next;
    this.length--;

    if(this.length === 0) {
      this.tail = null;
    }
  }
  
  // Insert at the beginning, Unshift
  unshift(value) {
    const newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Find node by index, get
  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while(counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // Set the data of a node. Set
  set(index, value) {
    const foundNode = this.get(index);

    if(!foundNode) {
      return false;
    }

    foundNode.data = value;
    return true;
  }

  // Insert at position, Insert
  insert(index, value) {
    if(index < 0 || index > this.length) {
      return false;
    }

    if(index === this.length) {
      return !!this.push(value);
    }

    if(index === 0) {
      return !!this.unshift(value);
    }

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const aux = previousNode.next;
    previousNode.next = newNode;
    newNode.next = aux;
    this.length++;
    return true;
  }

  // Remove by index, remove
  remove(index) {
    if(index < 0 || index >= this.length) {
      return undefined;
    }

    if(index === 0) {
      return this.shift();
    }

    if(index === this.length - 1) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;

    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }

  // Traverse
  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);
singlyLinkedList.push(40);
singlyLinkedList.push(50);
singlyLinkedList.push(60);

console.log(singlyLinkedList);

singlyLinkedList.pop();
singlyLinkedList.pop();

console.log(singlyLinkedList);

singlyLinkedList.shift();
console.log(singlyLinkedList);

singlyLinkedList.unshift(-10);
console.log(singlyLinkedList);

console.log(singlyLinkedList.get(3).data);

singlyLinkedList.set(3, 100);
console.log(singlyLinkedList);

singlyLinkedList.insert(2, 11);
console.log(singlyLinkedList);
console.log(singlyLinkedList.get(2));

singlyLinkedList.remove(2);
console.log(singlyLinkedList);

singlyLinkedList.reverse();
console.log(singlyLinkedList);
console.log(singlyLinkedList.get(2));

singlyLinkedList.traverse();
