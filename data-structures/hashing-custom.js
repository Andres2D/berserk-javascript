// Hashing, custom implementation

class CustomHash {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  // Determine the index of the value to insert
  _hash(value) {
    let hash = 0;
    for(let i = 0; i < value.length; i++) {
      hash += value.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // without collision prevention
  oldSet(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
    return this.table;
  }
  
  // with collision prevention
  set(key, value) {
    const index = this._hash(key);
    if(this.table[index]) {
      for(let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  oldGet(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  get(key) {
    const index = this._hash(key);
    if(this.table[index]) {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }

    return undefined;
  }

  oldRemove(key) {
    const index = this._hash(key);
    if(!this.table[index] && !this.table[index].length) {
      return false;
    }
    this.table[index] = undefined;
    this.size--;
    return true;
  }

  remove(key) {
    const index = this._hash(key);

    if(this.table[index] && this.table[index].length) {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  displayMap() {
    for(let data of this.table) {
      if(data) {
        console.log(data);
      }
    }
  }
}

const myHash = new CustomHash();

myHash.set('Andres2D', 2);
myHash.set('Thec778', 221);
myHash.set('Rojas665', 320);

myHash.displayMap();
myHash.remove('Thec778');
console.log('=======');
myHash.displayMap();
console.log('=======');
// collision example
myHash.set('Spain', 110);
myHash.set('ǻ', 192);
// this two values generates the same index
// so the value is overwritten

console.log(myHash.get('Andres2D'));
console.log(myHash.get('Spain'));
myHash.displayMap();

myHash.remove('ǻ');

console.log('=======');
myHash.displayMap();
