
const baseArray = [5,4,6,8,2,2,3,6,8,4,5,7,8,9,6,2,1,2,3,5];

console.log(baseArray.sort());

Array.prototype.customSort = function (){
  const arr = this;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      let aux = arr[j];
      if(arr[j] > arr[j+1]){
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }
  }
  return arr;
}

console.log(baseArray.customSort());
