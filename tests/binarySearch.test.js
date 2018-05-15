const { expect } = require('chai');
const binarySearch = require('../lib/binarySearch');
const sinon = require('sinon');


describe('Binary Search', () => {
  describe('#binarySearch', () => {
    describe('Sucessfully finds the element', () => {
      it('Returns true when it finds an element', () => {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(binarySearch(sortedArray, 2)).to.be.true;
      });
      it('Can find every element in a small array', () => {
        const sortedArray = [1, 2, 3];
        sortedArray.forEach(element => {
          expect(binarySearch(sortedArray, element)).to.be.true;
        });
      })
      it('Can find every element in a large array', () => {
        let sortedArray = [];
        for (let i = 0; i < 100000; i++) {
          sortedArray.push(i);
        }
        sortedArray.forEach(element => {
          expect(binarySearch(sortedArray, element)).to.be.true;
        });
      });

      it('Finds an element when the length of the array is even', () => {
        const sortedArray = [1, 2, 3, 4];
        sortedArray.forEach(element => {
          expect(binarySearch(sortedArray, element)).to.be.true;
        });
      })

    });
  });

});