const arrayToSort = [3,45,4,222,4,9,2,0,1,2,3,44,4,22,3,7,8,23,994,0,-1,2,44,89];

const merge = (array, left, middle, right) => {
  const firstLength = middle - left + 1;
  const secondLength = right - middle;

  const leftArray = new Array(firstLength);
  const rightArray = new Array(secondLength);

  for(let i = 0; i < firstLength; i++) {
    leftArray[i] = array[left + i];
  }

  for(let j = 0; j < secondLength; j++) {
    rightArray[j] = array[middle + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k  = left;

  while(i < firstLength && j < secondLength) {
    if(leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while(i < firstLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while(j < secondLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
};

const mergeSort = (array, left, right) => {
  if(left >= right) {
    return;
  }

  const middle = Math.floor(left + (right - left) / 2);
  mergeSort(array, left, middle);
  mergeSort(array, middle + 1, right);
  merge(array, left, middle, right);
};

mergeSort(arrayToSort, 0, arrayToSort.length - 1);
console.log(arrayToSort);
