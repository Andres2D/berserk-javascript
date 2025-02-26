class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if(this.head) {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  transverse() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverse() {
    console.log('reversing...');
    let previous = null;
    let current = this.head;
    let following = this.head;
    while(current) {
      following = following.next;
      current.next = previous;
      previous = current;
      current = following;
    }
    this.head = previous;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

linkedList.transverse();
linkedList.reverse();
linkedList.transverse();
