const assert = require('assert');
const { keypad } = require('../problems/recursion/keypadCombinations.js')

describe('key pad problem tests', () => {
   it('test case #1', () => {
      const input = 0;
      const solution = [''];
      const output = keypad(input);
      assert.deepEqual(solution, output); 
   });

   it('test case #2', () => {
      const input = 23;
      const solution = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']; 
      const output = keypad(input);
      assert.deepEqual(solution, output);
   });

   it('test case #3', () => {
      const input = 32;
      const solution = ['da', 'db', 'dc', 'ea', 'eb', 'ec', 'fa', 'fb', 'fc']; 
      const output = keypad(input);
      assert.deepEqual(solution, output); 
   });

   it('test case #4', () => {
      const input = 8;
      const solution = ['t', 'u', 'v']; 
      const output = keypad(input);
      assert.deepEqual(solution, output); 
   });
   
   it('test case #5', () => {
      const input = 354;
      const solution = (['djg', 'ejg', 'fjg', 'dkg', 'ekg', 'fkg', 'dlg', 'elg', 'flg', 
                        'djh', 'ejh', 'fjh', 'dkh', 'ekh', 'fkh', 'dlh', 'elh', 'flh', 
                        'dji', 'eji', 'fji', 'dki', 'eki', 'fki', 'dli', 'eli', 'fli']).sort();
      const output = keypad(input);
      assert.deepEqual(solution, output); 
   }); 
});