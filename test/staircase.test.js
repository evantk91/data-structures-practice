const assert = require('assert');
const { staircase } = require('../problems/recursion/staircase.js');

describe('staircase tests', () => {
   it('test case #1', () => {
      const n = 3;
      const soln = 4;
      const output = staircase(n);
      assert.equal(soln, output);    
   });   
   
   it('test case #2', () => {
      const n = 4;
      const soln = 7;
      const output = staircase(n);
      assert.equal(soln, output);    
   }); 

   it('test case #3', () => {
      const n = 7;
      const soln = 44;
      const output = staircase(n);
      assert.equal(soln, output);    
   }); 
});