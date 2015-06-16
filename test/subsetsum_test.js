'use strict';

if(typeof exports !== 'undefined') {
  var subsetsum = require('../src/subsetsum');
}

describe('Service: subsetsum', function () {

  function beautyPrint(result, target) {
    var string = new String("\n");

    result.forEach(function (partial) {
       string = string.concat(partial.join("+") + "=" + target + "\n");
    });
    console.log(string);
  }

  describe('.getSubsets(numbers, target, options)', function () {

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

    describe('options.number function', function () {

      it('should work as expected', function () {

        var items = [
          { name: 'uno di ori', val : 1},
          { name: '2 di bastoni', val: 2},
          { name: '3 di ori', val: 3},
          { name: '8 di coppe', val: 8}
        ];

        var target = {name: '3 di bastoni', val : 3};

        var number = function (item) { return item.val; };

        var res = subsetsum.getSubsets(items, target, {
          number : number
        });

        var expectedRes = [[items[0], items[1]], [items[2]]];

        expect(JSON.stringify(res)).toEqual(JSON.stringify(expectedRes));
        expect(res).toEqual(expectedRes);

      });
    });


  });

});
