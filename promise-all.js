/**
 * The promise all implementation receives an array of promises
 * and return and array of resolved promises in the same order
 * of the input parameters. If a single promise fails or is rejected
 * the hole promise will fail
 * Real example:
 * */ 
const firstPromise = Promise.resolve('First solution');
const secondPromise = 56;
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Timeout solved');
  }, 2200);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then(res => {
  console.log(res);
});
