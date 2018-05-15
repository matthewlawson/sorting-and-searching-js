/**
 * 
 * @param {*} array A sorted array of primitives 
 */
let searchCount;
function doBinarySearch(array, searchItem) {
  searchCount = 0;
  let result = binarySearch(array, searchItem, 0, array.length - 1);
  return result;
}

function binarySearch(array, searchItem, left, right) {
  searchCount++;
  if(left > right) {
    // Nor found?
    return false;
  }

  let middle = Math.floor((right + left) / 2);

  if(array[middle] > searchItem) {
    // Must be in first half
    return binarySearch(array, searchItem, left, middle);
  }
  else if (array[middle] < searchItem) {
    // Must be in second hald
    return binarySearch(array, searchItem, middle + 1, right);
  }
  else {
    // This is the item we found it !!!
    return true;
  }
}

module.exports = doBinarySearch;