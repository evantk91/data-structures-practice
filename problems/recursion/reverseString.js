function reverseString(input) {
   if(input.length === 0) {
      return "";    
   } else {
      let firstChar = input[0];
      let subStr = input.slice(1);
      let reversed = reverseString(subStr); 
      return reversed + firstChar;
   };
};

module.exports = {
   reverseString,
}