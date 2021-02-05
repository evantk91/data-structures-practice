const assert = require('assert');
const { factorial } = require('../problems/recursion/factorial.js');

describe('factorial function tests', () => {
   it('test case #1 - n = 0', () => {
      const n = 0;
      const solution = 1;
      const output = factorial(n);
      assert.strictEqual(output, solution);
   });

   it('test case #2 - n = 1', () => {
      const n = 1;
      const solution = 1;
      const output = factorial(n);
      assert.strictEqual(output, solution);
   });

   it('test case #3 - n = 5', () => {
      const n = 5;
      const solution = 120;
      const output = factorial(n);
      assert.strictEqual(output, solution); 
   });
});