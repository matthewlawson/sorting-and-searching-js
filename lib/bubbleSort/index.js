/**
 * 
 * Start at the beginning of the array swap the first 2 eleents if first > second. Then next pair.
 * Making sweeps until the array is sorted. 
 * 
 * Simple, good for if an array of values is known to be almost sorted, with out of place values close to where they need to be.
 * 
 * Average and worst case O(n^2)
 * In place so memory: O(1)
 * 
 * Example Input: [34, 1, 333, 75, 2, 4, 5, 6];
 */

function bubbleSortRecursive(array) {
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    if( array[i] > array[i + 1]) {
      swap(i, i + 1, array);
      swapped = true;
    }
  }
  if(swapped) {
    // Have another pass.
    return bubbleSortRecursive(array);
  }
  else {
    // We haven't swapped anything in this recursion so we are sorted
    return array;
  }
}

function bubbleSort(array) {
  let swapped;
  for(let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for(let j = 0; j < array.length - i - 1 ; j++) {
      if(array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}
function swap(indexOne, indexTwo, array) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}

module.exports = {bubbleSortRecursive, bubbleSort};