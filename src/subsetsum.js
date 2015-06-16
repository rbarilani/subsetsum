(function (exports) {
  'use strict';

  /**
   * Porting of python implementation
   * source: Stackoverflow answer - http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
   *
   *
  # python version
  def subset_sum(numbers, target, partial=[]):
      s = sum(partial)

      # check if the partial sum is equals to target
      if s == target:
          print "sum(%s)=%s" % (partial, target)
      if s >= target:
          return  # if we reach the number why bother to continue

      for i in range(len(numbers)):
          n = numbers[i]
          remaining = numbers[i+1:]
          subset_sum(remaining, target, partial + [n])


  if __name__ == "__main__":
      subset_sum([3,9,8,4,5,7,10],15)

      #Outputs:
      #sum([3, 8, 4])=15
      #sum([3, 5, 7])=15
      #sum([8, 7])=15
      #sum([5, 10])=15

  */
  function subsetSum(numbers, target, options, partial, result) {

    var s, n, remaining;

    partial = partial || [];
    result = result || [];

    // sum partial
    s = partial.reduce(function (prev, curr) {
      return prev + options.number(curr);
    }, 0);

    // check if the partial sum is equals to target
    if (s === options.number(target)) {
      // console.log("sum", partial, target);
      if(partial.length) {
        result.push(partial);
      }
    }

    if (s >= options.number(target)) {
      return result;  // if we reach the number why bother to continue
    }

    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice(i + 1);
      subsetSum(remaining, target, options, partial.concat([n]), result);
    }
    return result;
  }

  /**
   * Utility extend function
   * Create a new object merging target and source object properties
   *
   * @private
   *
   * @param {Object} target
   * @param {Object} source
   * @return {Object} - the new object
   */
  function _extend(target, source) {
    var a = Object.create(target);
    Object.keys(source).map(function (prop) {
        if(prop in a) {
          a[prop] = source[prop];
        }
    });
    return a;
  }

  /**
   * Public API
   * @module subsetsum
   */

  /**
   * Find all possible combinations of a set of positive numbers to reach a given positive sum target.
   * Returns an empty array when no combinations was found.
   *
   * Porting of python implementation
   * source: Stackoverflow answer - http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
   *
   * @param {Array}  numbers
   *   A set of positive int numbers or can be a set of any type but you must provide a function
   *   to extract a positive int number for those types @see options.number
   *
   * @param {Int|Object} target  - positive sum int or an object that represents the target (int number is extracted with the options.number function)
   * @param {Object} options - options
   *
   * @param {Function} options.number
   *  A function to extract a int number for curr item
   *
   * @return {Array}
   */
  exports.getSubsets = function (numbers, target, options) {

    var opts = _extend({
      number: function (n) { return n; }
    }, options || {});

    return subsetSum(numbers, target, opts);
  };

})(typeof exports === 'undefined'? this.subsetsum = {} : exports);

