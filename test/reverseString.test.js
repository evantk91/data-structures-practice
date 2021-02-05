const assert = require('assert');
const { reverseString } = require('../problems/recursion/reverseString.js');

describe('reverse string tests', () => {
   it('test case #1', () => {
      const input = '';
      const solution = '';
      const output = reverseString(input);    
      assert.strictEqual(solution, output);
   });
   
   it('test case #2', () => {
      const input = 'abc'
      const solution = 'cba'
      const output = reverseString(input);    
      assert.strictEqual(solution, output);
   });
});