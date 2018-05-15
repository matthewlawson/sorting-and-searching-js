/**
 * Accepts unsorted unique array and returns a sorted array
 * EG:
 * array - [11, 15, 3 ,9, 6, 8] will return [3, 6 ,8, 9, 11, 15]
 * @param {*} array 
 * 
 * Worst case O(n^2)
 * Average: O(n log n)
 */

function doQuickSort(array) {
  quicksort(array, 0, array.length - 1);
  return array;
}
function partition(array, leftPointerIndex, rightPointerIndex, pivotValue) {
  while(leftPointerIndex <= rightPointerIndex) {
    // Search for something less than the pivot
    while(array[leftPointerIndex] < pivotValue) {
      leftPointerIndex++;
    }
    while(array[rightPointerIndex] > pivotValue) {
      rightPointerIndex --;
    }

    if(leftPointerIndex <= rightPointerIndex) {
      swap(array, leftPointerIndex, rightPointerIndex);
      leftPointerIndex++;
      rightPointerIndex--;
    }
  }
  return leftPointerIndex;
}

function quicksort(array, leftPointerIndex, rightPointerIndex) {
  
  if(leftPointerIndex >= rightPointerIndex ) {
    return;
  }
  // Step 1. Pick a pivot: (Middle element)
  let pivotIndex = Math.floor((leftPointerIndex + rightPointerIndex) /2);
  
  let pivotValue = array[pivotIndex];
  
  let index = partition(array, leftPointerIndex, rightPointerIndex, pivotValue);
  quicksort(array, leftPointerIndex, index - 1);
  quicksort(array, index, rightPointerIndex);
}


function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}
module.exports = doQuickSort;