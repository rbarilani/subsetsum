'use strict';

if(typeof exports !== 'undefined') {
  var subsetsum = require('../src/subsetsum');
}

describe('Service: subsetsum', function () {

  describe('.getSubsets(numbers, target)', function () {

    it('should return empty array when expected', function () {
      expect(subsetsum.getSubsets([3,9,8],-1)).toEqual([]);
      expect(subsetsum.getSubsets([3,9,8],0)).toEqual([]);
      // FIMXE: expect(subsetSum.getSubsets([3,9,8,0],0)).toEqual([[0]]); this fails miserably
    });

    it('should work as expected with positive numbers', function () {
      expect(subsetsum.getSubsets([3,9,8,4,5,7,10],8)).toEqual([
        [3, 5],
        [8]
      ]);

      expect(subsetsum.getSubsets([3,9,8,4,5,7,10],15)).toEqual([
        [3, 8, 4],
        [3, 5, 7],
        [8, 7],
        [5, 10]
      ]);

      expect(subsetsum.getSubsets([3,9,8,4,5,7,10,15],15)).toEqual([
        [3, 8, 4],
        [3, 5, 7],
        [8, 7],
        [5, 10],
        [15]
      ]);
    });

  });

});
