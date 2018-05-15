const { expect } = require('chai');
const binarySearch = require('../lib/binarySearch');
const sinon = require('sinon');
const quickSort = require('../lib/quicksort');

// Not complete coverage..
describe('Quick Sort', () => {
  describe('#doQuickSort', () => {
    it('sorts a simple array', () => {
      const input = [12, 9, 111, 3, 0];
      const output = quickSort(input);
      expect(output).to.eql([0, 3, 9, 12, 111]);
    });

    it('sorts an array with duplicates', () => {
      const input = [4, 4, 4, 40, 0, 0, 0, 0];
      const output = quickSort(input);
      expect(output).to.eql([0, 0, 0, 0, 4, 4, 4, 40]);
    });

    it('handles an empty array', () => {
      const input = [];
      const output = quickSort(input);
      expect(output).to.eql([]);
    });
  });
});

