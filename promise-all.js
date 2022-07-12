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
  }, 200);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then(res => {
  console.log(`Promise.all ===> ${res}`);
});

/**
 * Now, if we need to implement this functionality by our own
 * will be something like this:
 */
Promise.myOwnAll = (promises) => {
  return new Promise((resolve, reject) => {

    let count = 0; // control the current promise to solve
    let result = []; // save the result of each promise
    const promiseLength = promises.length;

    if(promiseLength === 0){
      return resolve(result);
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        count += 1;
        result[idx] = res;
        if(count === promiseLength) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      });
    });
  });
};

Promise.myOwnAll([firstPromise, secondPromise, thirdPromise]).then(res => {
  console.log(`Promise.myOwnAll ==> ${res}`);
});

// const errorPromise = Promise.reject('Intentional error');
// Promise.myOwnAll([firstPromise, secondPromise, thirdPromise]).then(res => {
//   console.log(`Promise.myOwnAll with error ==> ${res}`);
// }).catch(err => console.log(err));
