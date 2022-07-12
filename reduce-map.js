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

console.log(`From original map [${newArray}]`);

/**
 * Now, if we need to generate our own map function 
 * will be something like this:
 */
 Array.prototype.customMap = function(callback, ctx = null){
  if(typeof callback !== 'function'){
    throw('The callback must be a function');
  }
  
  return this.reduce((result, current, idx, arr) => {
    return result.concat(callback.call(ctx, current, idx, arr));
  },[]);
  

};

const newCustomArray = baseArray.customMap((val, idx, arr) => {
  return val * 2;
});
console.log(`From custom map [${newCustomArray}]`);
