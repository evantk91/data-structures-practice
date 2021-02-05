function permute(input) {
   //given an input string
   //return list of all permutations of the string

   let stringPermutations = [];

   //base case - if input is empty, push empty string into permutation list
   if(input.length === 0) {
      stringPermutations.push('');
   } else {
      //remove first character of the string to be permuted for each substring 
      let first = input[0];
      let remainingStr = input.slice(1, input.length);
      let newStr;

      //call recursively on remaining string
      subStringCombinations = permute(remainingStr);

      //iterate through substring return from recursive call
      for(let i = 0; i < subStringCombinations.length; i++) {
         let string = subStringCombinations[i];
         //insert first character into all possible positions for each substring
         for(let j = 0; j <= string.length; j++) {
            if(j === 0) {
               newStr = first + string;
            } else if(j === string.length) {
               newStr = string + first;
            } else {
               newStr = string.substring(0, j) + first + string.substring(j, string.length);
            };
            //push each new string into permutation list
            stringPermutations.push(newStr);
         };
      }; 
   };

   return stringPermutations;
};

module.exports = {
   permute, 
}