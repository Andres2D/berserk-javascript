const arrayToSort = [3,45,4,222,4,9,2,0,1,2,3,44,4,22,3,7,8,23,994,0,-1,2,44,89];

for(let i = 0; i < arrayToSort.length; i++) {
  for(let j = 0; j < arrayToSort.length; j++) {
    if(arrayToSort[i] < arrayToSort[j]) {
      const aux = arrayToSort[j];
      arrayToSort[j] = arrayToSort[i];
      arrayToSort[i] = aux;
    }
  }
}

console.log(arrayToSort);
