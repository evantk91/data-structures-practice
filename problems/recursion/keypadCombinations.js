function keypad(num) {
   // given an integer, find all possible strings that can be made using digits of input
   // return these strings in a list. The order of letters in a particular string matters, order of strings does not.

   let keypadCombinations = [];

   //base case - if input is zero, push empty string into combination list
   if(num === 0) {
      keypadCombinations.push("");          
   } else {
      //remove first digit of the number 
      let numStr = num.toString();
      let firstDigit = parseInt(numStr[0]);
      let remainingDigits;

      //set remaining digits to 0 if the input is a single digit
      if(numStr.length === 1) {
         remainingDigits = 0;    
      } else {
         remainingDigits = parseInt(numStr.slice(1, numStr.length));
      };

      //call recursively on remaining digits
      subCombinations = keypad(remainingDigits);

      //get possible characters for the digit
      let numChars = getCharacters(firstDigit);
      let newComb;
      //find all combinations between digit characters and sub combinations 
      //returned from the recursive call
      for(let i = 0; i < numChars.length; i++) {
         let char = numChars[i]; 
         for(let j = 0; j < subCombinations.length; j++) {
            let subCombination = subCombinations[j];
            newComb = char + subCombination;
            //push each new combination into list
            keypadCombinations.push(newComb);
         }
      }
   }

   return keypadCombinations;
}

//helper function that returns the possible characters for the digit
function getCharacters(num) {
   switch(num) {
      case 2:
         return "abc";
      case 3:
         return "def";    
      case 4:
         return "ghi";  
      case 5:
         return "jkl";
      case 6:
         return "mno";    
      case 7:
         return "pqrs";
      case 8:
         return "tuv";    
      case 9:
         return "wxyz"; 
      default:
         return "";                             
   }    
}

module.exports = {
   keypad, 
}