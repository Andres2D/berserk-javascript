// Singleton base implementation
// In practice, the Singleton pattern is useful when exactly 
// one object is needed to coordinate others across a system

// Whilst the Singleton has valid uses, often when we find 
// ourselves needing it in JavaScript it's a sign that we may need to re-evaluate our design.

let instance;

const score = Math.random();

class ScoreSingleton {
  constructor() {
    if(!instance) {
      instance = this;
    }

    return instance;
  }

  getScore() {
    return score;
  }
}

export default ScoreSingleton;

// Usage

// import ScoreSingleton from '...';

// const singletonOne = new ScoreSingleton();
// const singletonTwo = new ScoreSingleton();

// console.log(singletonOne.getScore() === singletonTwo.getScore()) // true;

