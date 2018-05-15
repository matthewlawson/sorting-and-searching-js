/**
 * Find smallest element with linear scan & swap with front element.
 * Then find second smallest and move again.
 */

 // O(n ^ 2), space o(1)
function selectionSort(array, startAt = 0) {
  if(startAt == array.length - 1) {
    return array;
  }
  let smallest = array[startAt];
  let smallestIndex = startAt;
  for (let i = startAt; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  swap(startAt, smallestIndex, array);
  return selectionSort(array, startAt+1);
}

function swap(indexOne, indexTwo, array) {
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}

module.exports = selectionSort;