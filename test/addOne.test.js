const assert = require('assert');
const { addOne } = require('../problems/recursion/addOne.js');

describe('add one test', () => {
   it('test case #1', () => {
      const arr = [0];
      const solution = [1];
      const output = addOne(arr);
      assert.deepEqual(solution, output);    
   })
   
   it('test case #2', () => {
      const arr = [1, 2, 3];
      const solution = [1, 2, 4];
      const output = addOne(arr);
      assert.deepEqual(solution, output);    
   })
   
   it('test case #3', () => {
      const arr = [9, 9, 9];
      const solution = [1, 0, 0, 0];
      const output = addOne(arr);
      assert.deepEqual(solution, output);    
   })   
})