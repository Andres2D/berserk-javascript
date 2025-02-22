const arrayToSort = [3,45,4,222,4,9,2,0,1,2,3,44,4,22,3,7,8,23,994,0,-1,2,44,89];

const partition = (array, low, high) => {
  let pivot = array[high];
  let i = low - 1;

  for(let j = low; j <= high - 1; j++) {
    if(array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], [array[high]]] = [array[high], array[i + 1]];
  return i + 1;
}

const quickSort = (array, low, high) => {
  if(low >= high) {
    return;
  }
  let pivot = partition(array, low, high);
  quickSort(array, low, pivot - 1);
  quickSort(array, pivot + 1, high);
}

quickSort(arrayToSort, 0, arrayToSort.length - 1);
console.log(arrayToSort);
