var testHelper = require("./test-helper");
var algorithm = require("../index").selectionSort;

describe("selection-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
