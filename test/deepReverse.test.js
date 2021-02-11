const assert = require('assert');
const { deepReverse } = require('../problems/recursion/deepReverse.js');

describe('deep reverse tests', () => {
   it('test case #1', () => {
      const input = [1, 2, 3, 4, 5];
      const solution = [5, 4, 3, 2, 1];
      const output = deepReverse(input);    
      assert.deepEqual(output, solution);
   });

   it('test case #2', () => {
      const input = [1, 2, [3, 4, 5], 4, 5];
      const solution = [5, 4, [5, 4, 3], 2, 1];
      const output = deepReverse(input);    
      assert.deepEqual(output, solution);    
   });

   it('test case #3', () => {
      const input = [1, [2, 3, [4, [5, 6]]]];
      const solution = [[[[6, 5], 4], 3, 2], 1];
      const output = deepReverse(input);
      assert.deepEqual(output, solution);
   });

   it('test case #4', () => {
      const input = [1, [2, 3], 4, [5, 6]];
      const solution = [[6, 5], 4, [3, 2], 1];
      const output = deepReverse(input);
      assert.deepEqual(output, solution);
   });
});