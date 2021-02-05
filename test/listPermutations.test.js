const assert = require('assert');
const { permute } = require('../problems/recursion/listPermutations.js');

describe('list permutation tests', () => {
   it('test case #1', () => {
      const input = [];
      const output = permute(input);
      const solution = [[]];
      assert.deepEqual(solution, output);
   });
   
   it('test case #2', () => {
      const input = [0];
      const output = permute(input);
      const solution = [[0]];
      assert.deepEqual(solution, output);    
   });   

   it('test case #3', () => {
      const input = [0, 1];
      const output = permute(input);
      const solution = [[0, 1], [1, 0]];
      assert.deepEqual(solution, output);
   });
 
   it('test case #3', () => {
      const input = [0, 1, 2];
      const output = permute(input);
      const solution = [[0, 1, 2], [1, 0, 2], [1, 2, 0], [0, 2, 1], [2, 0, 1], [2, 1, 0]];
      assert.deepEqual(solution, output);
   });

   it('test case #4', () => {
      const input = [0, 1, 2, 3];
      const output = permute(input);
      const solution = [[0, 1, 2, 3], [1, 0, 2, 3], [1, 2, 0, 3], [1, 2, 3, 0], 
                        [0, 2, 1, 3], [2, 0, 1, 3], [2, 1, 0, 3], [2, 1, 3, 0],
                        [0, 2, 3, 1], [2, 0, 3, 1], [2, 3, 0, 1], [2, 3, 1, 0],
                        [0, 1, 3, 2], [1, 0, 3, 2], [1, 3, 0, 2], [1, 3, 2, 0],
                        [0, 3, 1, 2], [3, 0, 1, 2], [3, 1, 0, 2], [3, 1, 2, 0],
                        [0, 3, 2, 1], [3, 0, 2, 1], [3, 2, 0, 1], [3, 2, 1, 0]];
      assert.deepEqual(solution, output);
   });
});