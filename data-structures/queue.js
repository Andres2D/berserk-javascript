// Queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  dequeue() {
    if(this.isEmpty()) {
      return false;
    }

    this.items.shift();
  }

  // Get item in the front
  front() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  rear() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

const clientsQueue = new Queue();
clientsQueue.enqueue(1);
clientsQueue.enqueue(2);
clientsQueue.enqueue(3);
clientsQueue.enqueue(4);
clientsQueue.enqueue(5);
clientsQueue.enqueue(6);

console.log(clientsQueue.items);

clientsQueue.dequeue();
clientsQueue.dequeue();
clientsQueue.dequeue();

console.log(clientsQueue.items);

console.log(clientsQueue.front());
console.log(clientsQueue.rear());
