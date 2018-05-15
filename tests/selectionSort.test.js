const { expect } = require('chai');
const selectionSort = require('../lib/selectionSort');
const sinon = require('sinon');


describe('Selection Sort', () => {
  describe('#selectionSort', () => {
    it('Sorts the array ', () => {
      // Write some tests ...
      const unsortedArray = [34, 1, 333, 75, 2, 4, 5, 6];
      const sortedArray = selectionSort(unsortedArray);
      expect(sortedArray).to.eql([1, 2, 4, 5, 6, 34, 75, 333]);
    });
  });

  
});