// Circular Linked lists

// Circular Singly linked
// Init

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // unshift
  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
  }

  push(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
    this.length++;
  }

  // Traverse
  traverse() {
    let current = this.head;
    let counter = 0;
    while(counter < this.length) {
      console.log(current.data);
      current = current.next;
      counter++;
    }
  }

  // Delete first element, Shift
  shift() {
    if(!this.head) {
      return undefined;
    }

    const current = this.head;
    this.head = current.next;
    this.tail.next = this.head;
    this.length--;
  }
}

const circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.unshift(10);
circularSinglyLinkedList.unshift(20);
circularSinglyLinkedList.unshift(30);

circularSinglyLinkedList.push(40);
circularSinglyLinkedList.push(50);

circularSinglyLinkedList.shift();

circularSinglyLinkedList.traverse();
