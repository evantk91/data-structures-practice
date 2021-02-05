const assert = require('assert');
const { isPalindrome } = require('../problems/recursion/isPalindrome.js');

describe('palindrome tests', () => {
   it('test case #1', () => {
      const input = "";
      const solution = true;
      const output = isPalindrome(input);
      assert.strictEqual(solution, output);
   });
   
   it('test case #2', () => {
      const input = "a";
      const solution = true;
      const output = isPalindrome(input);
      assert.strictEqual(solution, output);    
   });

   it('test case #3', () => {
      const input = "madam";
      const solution = true;
      const output = isPalindrome(input);
      assert.strictEqual(solution, output);    
   });

   it('test case #4', () => {
      const input = "abba";
      const solution = true;
      const output = isPalindrome(input);
      assert.strictEqual(solution, output);    
   });

   it('test case #5', () => {
      const input = "Udacity";
      const solution = false;
      const output = isPalindrome(input);
      assert.strictEqual(solution, output);    
   });
});