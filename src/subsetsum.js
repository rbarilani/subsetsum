(function (exports) {
  'use strict';

  /**
   * Porting of python implementation
   * source: Stackoverflow answer - http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum
   *
   * Find all possible combinations of a set of positive
   * numbers to reach a given positive sum target.
   * Returns an empty array when no combinations.
   *
   * @param {Array} numbers - a set of positive numbers
   * @param {Int}   target  - positive sum target
   *
   * @return {Array}
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
  function subsetSum(numbers, target, partial, result) {

    var s, n, remaining;

    partial = partial || [];
    result = result || [];

    // sum partial
    s = partial.reduce(function (a, b) {
      return a + b;
    }, 0);

    // check if the partial sum is equals to target
    if (s === target) {
      // console.log("sum", partial, target);
      if(partial.length) {
        result.push(partial);
      }
    }

    if (s >= target) {
      return result;  // if we reach the number why bother to continue
    }

    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice(i + 1);
      subsetSum(remaining, target, partial.concat([n]), result);
    }
    return result;
  }

  /**
   * Public API
   */
  exports.getSubsets = function (numbers, target) {
    return subsetSum(numbers, target);
  };

})(typeof exports === 'undefined'? this.subsetSum = {} : exports);

