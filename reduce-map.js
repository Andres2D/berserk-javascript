/**
 * The map method in the array object allow us to 
 * iterate the array and mutate the values,
 * like this:
 */

const baseArray = [1,2,3,4];
// Let's say that we want to multiply each value by 2
const newArray = baseArray.map((val) => {
  return val * 2;
});

// console.log(newArray);



