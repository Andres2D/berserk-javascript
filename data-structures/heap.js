// Max Heap

class MaxHeap {
  constructor(maxSize) {
    this.array = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.heapSize = 0;
  }

  // Swapping tree positions to keep the max heap validation
  maxHeapify(index) {
    const left = this.leftChild(index);
    const right = rightChild(index);
    let largest = index;
    
    if(left < this.heapSize && this.array[left] > this.array[index]) {
      largest = left;
    }

    if(right < this.heapSize && this.array[right] > this.array[largest]) {
      largest = right;
    }

    if(largest !== i) {
      const temp = this.array[index];
      this.array[index] = this.array[largest];
      this.array[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }
  
  rightChild(index) {
    return 2 * index + 2;
  }

  removeMax() {
    if(this.heapSize <= 0) {
      return null;
    }

    if(this.heapSize === 1) {
      this.heapSize -= 1;
      return this.array[0];
    }

    const root = this.array[0];
    this.array[0] = this.array[this.heapSize - 1];
    this.heapSize -= 1;

    this.maxHeapify(0);

    return root;
  }

  setValueInPosition(index, newValue) {
    this.array[index] = newValue;

    while(index !== 0 && this.array[this.parent(index)] < this.array[index]) {
      const temp = this.array[index];
      this.array[index] = this.array[this.parent(index)];
      this.array[this.parent(index)] = temp;
      index = this.parent(index);
    }
  }

  getMax() {
    return this.array[0];
  }

  deleteNodeByIndex(index) {
    // Set the value to infinity in the given position
    this.setValueInPosition(index, Infinity);
    // Then remove the maximum value
    this.removeMax();
  }

  insertNode(value) {
    if(this.heapSize === this.maxSize) {
      console.log('Maximum heap length reached. Cannot insert more nodes.');
      return;
    }

    let index = this.heapSize;
    this.array[index] = value;
    this.heapSize += 1;

    while(index !== 0 && this.array[this.parent(index)] < this.array[index]) {
      const temp = this.array[index];
      this.array[index] = this.array[this.parent(index)];
      this.array[this.parent(index)] = temp;
      index = this.parent(index);
    }
  }
}

const heap = new MaxHeap(10);

heap.insertNode(12);
heap.insertNode(9);
heap.insertNode(2);
heap.insertNode(3);
heap.insertNode(78);

console.log(heap.array);
