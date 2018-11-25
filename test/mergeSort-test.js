const assert = require('chai').assert;
const functions = require('../lib/mergeSort');

describe("It sorts an array", function() {
  context("The argument is one element long", function() {
    it("Should return the array it takes in if it's only 1 digit long", function() {
      let arg = [10];
      assert.equal(functions.mergeSort(arg).length, 1);
      assert.deepEqual(functions.mergeSort(arg), arg);
    });
  });
  context("The argument is a multi length array of unique characters", function() {
    it("Should return a sorted array", function() {
      let arg = [5,3,1,2,4];
      assert.equal(functions.mergeSort(arg).length, arg.length);
      assert.deepEqual(functions.mergeSort(arg), [1,2,3,4,5]);
    });
  });
  context("The argument is a multi length array of repeated and unique characters", function() {
    it("Should return a sorted array", function() {
      let arg = [5,3,1,3,2,4,5,1];
      assert.equal(functions.mergeSort(arg).length, arg.length);
      assert.deepEqual(functions.mergeSort(arg), [1,1,2,3,3,4,5,5]);
    });
  });
  context("#merge", function() {
    it("Take two arrays and put them together as one, sorting them", function() {
      let arg1 = [2];
      let arg2 = [1];
      assert.equal(functions.merge(arg1,arg2).length, 2);
      assert.deepEqual(functions.merge(arg1,arg2), [1,2]);
    });
  });
});
