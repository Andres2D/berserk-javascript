// Singleton base implementation

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

