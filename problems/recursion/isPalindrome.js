function isPalindrome(input) {
   // returns true if input is palindrome, false otherwise

   if(input.length <= 1) {
      return true;
   } else {
      let firstChar = input[0];
      let lastChar = input[input.length - 1];
      let subStr = input.slice(1, input.length - 1);
      
      return firstChar === lastChar && isPalindrome(subStr);
   };
};

module.exports = {
   isPalindrome, 
}