let privateScore = 0;

const privateFunction = () => {
  privateScore++;
}

const publicFunction = () => {
  publicSetScore();
}

const publicSetScore = () => {
  privateFunction();
}

const publicGetScore = () => privateScore;

const scoreRevealingModule = {
  start: publicFunction,
  increment: publicSetScore,
  score: publicGetScore
}

export default scoreRevealingModule;

// Usage
/*
In another file
import scoreRevealingModule from ...;

scoreRevealingModule.start();
*/
