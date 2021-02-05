const assert = require('assert');
const { permute } = require('../problems/recursion/stringPermutations.js');

describe('string permutation tests', () => {
   it('test case #1', () => {
      const input = 'ab';
      const solution = ['ab', 'ba'];
      const output = permute(input);
      assert.deepEqual(solution, output);
   });

   it('test case #2', () => {
      const input = 'abc';
      const solution = ['abc', 'bac', 'bca', 'acb', 'cab', 'cba'];
      const output = permute(input);
      assert.deepEqual(solution, output);
   });

   it('test case #3', () => {
      const input = 'abcd';
      const solution = ['abcd', 'bacd', 'bcad', 'bcda', 
                        'acbd', 'cabd', 'cbad', 'cbda', 
                        'acdb', 'cadb', 'cdab', 'cdba',
                        'abdc', 'badc', 'bdac', 'bdca',
                        'adbc', 'dabc', 'dbac', 'dbca',
                        'adcb', 'dacb', 'dcab', 'dcba'];
      const output = permute(input);
      assert.deepEqual(solution, output);
   });
});