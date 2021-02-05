function permute(input) {
   //given an input string
   //return list of all permutations of the string

   let stringPermutations = [];

   if(input.length === 0) {
      stringPermutations.push('');
   } else {
      let first = input[0];
      let remainingStr = input.slice(1, input.length);
      let newStr;

      subStringCombinations = permute(remainingStr);

      for(let i = 0; i < subStringCombinations.length; i++) {
         let string = subStringCombinations[i];
         for(let j = 0; j <= string.length; j++) {
            if(j === 0) {
               newStr = first + string;
            } else if(j === string.length) {
               newStr = string + first;
            } else {
               newStr = string.substring(0, j) + first + string.substring(j, string.length);
            };
            stringPermutations.push(newStr);
         };
      }; 
   };

   return stringPermutations;
};

module.exports = {
   permute, 
}