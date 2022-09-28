// Module Pattern with weak map
let _score = new WeakMap();

class ScoreModule {
  constructor() {
    _score.set(this, 0);
  }

  setScore(newScore) {
    _score.set(this, newScore);
    return _score.get(this);
  }

  resetScore() {
    _score.set(this, 0);
  }
}

const gameModule = new ScoreModule();
console.log(gameModule.setScore(200));
