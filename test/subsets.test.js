const assert = require('assert');
const { subsets } = require('../problems/recursion/subsets.js');

describe('subsets tests', () => {
   it('test case #1', () => {
      const arr = [9];
      const solution = [[], [9]];
      const output = subsets(arr);
      assert.deepEqual(solution, output);    
   });
   
   it('test case #2', () => {
      const arr = [5, 7];
      const solution = [[], [7], [5], [5,7]];
      const output = subsets(arr);
      assert.deepEqual(solution, output);       
   });

   it('test case #3', () => {
      const arr = [9, 12, 15];
      const solution = [[], [15], [12], [12, 15], [9], [9, 15], [9, 12], [9, 12, 15]];
      const output = subsets(arr);
      assert.deepEqual(solution, output);       
   });

   it('test case #4', () => {
      const arr = [9, 8, 9, 8];
      const solution = [[], [8], [9], [9, 8], [8], [8, 8], [8, 9], [8, 9, 8], [9], [9, 8], [9, 9], [9, 9, 8], [9, 8], [9, 8, 8], [9, 8, 9], [9, 8, 9, 8]];
      const output = subsets(arr);
      assert.deepEqual(solution, output);       
   });
});