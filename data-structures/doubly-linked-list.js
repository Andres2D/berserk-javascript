// Doubly linked list

class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }  
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Find a node by index, get
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

  // Insert at the beginning, unshift
  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // Insert at the end, push
  push(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Insert at position
  insert(index, value) {
    if(index < 0 || index >= this.length) {
      return undefined;
    }

    if(index === 0) {
      this.unshift(value);
      return true;
    }

    if(index === this.length - 1) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    newNode.previous = previousNode;
    previousNode.next.previous = newNode;
    previousNode.next = newNode;
    this.length++;
    return this;
  }

  // Delete node by value on first occurrence, delete
  delete(value) {
    if(!this.head) {
      return undefined;
    }

    let current = this.head;
    while(current) {
      if(current.data === value) {
        if(current == this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if(current === this.head) {
          this.head = current.next;
          this.head.previous = null;
        } else if(current === this.tail) {
          this.tail = current.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Traverse forward
  traverseForward() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Traverse backwards
  traverseBackwards() {
    let current = this.tail;
    while(current) {
      console.log(current.data);
      current = current.previous;
    }
  }

  // Find index by value, first occurrence. search
  search(data) {
    let current = this.head;
    let index = 0;
    while(current) {
      if(current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.unshift(10);
doublyLinkedList.push(20);
doublyLinkedList.push(20);
doublyLinkedList.push(30);
doublyLinkedList.push(40);
doublyLinkedList.push(20);
doublyLinkedList.insert(1, 15);

// doublyLinkedList.delete(10);
doublyLinkedList.delete(40);
// doublyLinkedList.delete(15);

doublyLinkedList.traverseForward();
console.log('-------');
doublyLinkedList.traverseBackwards();

console.log('Search :: ', doublyLinkedList.search(20));
