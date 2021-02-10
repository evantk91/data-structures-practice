function keypad(num) {
   // given an integer, find all possible strings that can be made using digits of input
   // return these strings in a list. The order of letters in a particular string matters, order of strings does not.

   let keypadCombinations = [];

   //base case - if input is zero, push empty string into combination list
   if(num === 0) {
      letterCombinations.push("");          
   } else {
      //remove first digit of the number 
      let numStr = num.toString();
      let firstDigit = parseInt(numStr[0]);
      let remainingDigits;

      if(numStr.length === 1) {
         remainingDigits = 0;    
      } else {
         remainingDigits = parseInt(numStr.slice(1, numStr.length));
      };

      //call recursively on remaining string
      keypadCombinations = keypad(remainingDigits);

      for(let i = 0; i < keypadCombinations.length; i++) {
         let keypadCombination = keypadCombinations[i];

      }
      
      console.log(firstDigit);
      console.log(remainingDigits);
   }

   return keypadCombinations;
}

module.exports = {
   keypad, 
}