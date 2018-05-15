const { expect } = require('chai');
const { bubbleSortRecursive, bubbleSort } = require('../lib/bubbleSort');
const sinon = require('sinon');


describe('Bubble Sort', () => {
  describe('#bubbleSortRecursive', () => {
    it('Sorts the array ', () => {
      // Write some tests ...
      const unsortedArray = [34, 1, 333, 75, 2, 4, 5, 6];
      const sortedArray = bubbleSortRecursive(unsortedArray);
      expect(sortedArray).to.eql([1, 2, 4, 5, 6, 34, 75, 333]);
    });
  });

  describe('#bubbleSortNonRecursive', () => {
    it('sorts the array', () => {
      const unsortedArray = [34, 1, 333, 75, 2, 4, 5, 6];
      const sortedArray = bubbleSort(unsortedArray);
      expect(sortedArray).to.eql([1, 2, 4, 5, 6, 34, 75, 333]);
    });
  })
});