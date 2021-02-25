function staircase(n) {
   //suppose there is a staircase you can climb in either 1 step, 2 steps, or 3 steps
   //given the number of steps in a staircase
   //return the number of possible ways to climb the staircase

   if(n <= 0) {
      return 1;
   } else if(n === 1) {
      return 1;    
   } else if(n === 2) {
      return 2;
   } else if(n === 3) {
      return 4;
   }

   return staircase(n - 1) + staircase(n - 2) + staircase(n - 3);
}

module.exports = {
   staircase, 
}