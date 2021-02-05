function addOne(arr) {
   // takes an array of digits representing a number
   // returns list of digits representing the next number

   //base case - adds additional digit if highest digit is 9
   if(arr.length === 1 && arr[0] === 9) {
      return [1, 0];
   };

   //adds one to digit if digit is less than 9
   if(arr[arr.length - 1] < 9) {
      arr[arr.length - 1] += 1;
   } else {
      //if digit is 9, change digit to 0 and recursively call function on remaining digits
      let subArr = arr.slice(0, arr.length - 1); 
      arr = addOne(subArr).concat([0]) 
   };

   return arr;
};

module.exports = {
   addOne,    
}