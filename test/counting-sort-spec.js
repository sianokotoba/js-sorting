var testHelper = require("./test-helper");
var algorithm = require("../index").countingSort;

describe("counting-sort", function () {
  for (var i = 0; i < testHelper.integerTests.length; i++) {
    (function (test) {
      var sorted = testHelper.getSorted(test);
      var original = testHelper.getOriginal(test);
      var minValue = sorted[0];
      var maxValue = sorted[sorted.length - 1];

      if (minValue >= 0) {
        it(test.it, function () {
          expect(algorithm(original, maxValue)).toEqual(sorted);
        });
      }
    })(testHelper.integerTests[i]);
  }
});
