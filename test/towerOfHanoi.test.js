const assert = require('assert');
const { towerOfHanoi } = require('../problems/recursion/towerOfHanoi.js');

describe('tower of hanoi tests', () => {
   it('test case #1', () => {
      const num = 2;
      const solution = ['SA', 'SD', 'AD'];
      const output = towerOfHanoi(num);
      assert.deepEqual(output, solution);
   });
   
   it('test case #2', () => {
      const num = 3;
      const solution = ['SD', 'SA', 'DA', 'SD', 'AS', 'AD', 'SD'];
      const output = towerOfHanoi(num);
      assert.deepEqual(output, solution);
   });

   it('test case #3', () => {
      const num = 4;
      const solution = ['SA', 'SD', 'AD', 'SA', 'DS', 'DA', 'SA', 
      'SD', 'AD', 'AS', 'DS', 'AD', 'SA', 'SD', 'AD'];
      const output = towerOfHanoi(num);
      assert.deepEqual(output, solution);
   });   
});