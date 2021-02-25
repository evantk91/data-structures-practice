const assert = require('assert');
const { lastIndex } = require('../problems/recursion/lastIndex.js');

describe('last index tests', () => {
   it('test case #1', () => {
      const arr = [1, 2, 5, 5, 4];
      const target = 5;
      const soln = 3;
      const output = lastIndex(arr, target);
      assert.equal(soln, output);
   })

   it('test case #2', () => {
      const arr = [1, 2, 5, 5, 4];
      const target = 7;
      const soln = -1;
      const output = lastIndex(arr, target);
      assert.equal(soln, output);
   })

   it('test case #3', () => {
      const arr = [91, 19, 3, 8, 9];
      const target = 91;
      const soln = 0;
      const output = lastIndex(arr, target);
      assert.equal(soln, output);
   })

   it('test case #4', () => {
      const arr = [1, 1, 1, 1, 1, 1];
      const target = 1;
      const soln = 5;
      const output = lastIndex(arr, target);
      assert.equal(soln, output);
   })

})