

// const mainFunction = () => {
//   let option = 10;
//   const inner = () => {
//     return option;
//   }
//   return inner;
// }

// const innerFn = mainFunction();
// console.log(innerFn());


console.log('First execution');

let cond = true;

setTimeout(() => {
  console.log('this is the async result');
}, 0);

if(cond) {
  console.log('It is true');
} else {
  console.log('It is false');
}


