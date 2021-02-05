function addOne(arr) {
   // takes an array of digits representing a number
   // returns list of digits representing the next number

   if(arr.length === 1 && arr[0] === 9) {
      return [1, 0];
   };

   if(arr[arr.length - 1] < 9) {
      arr[arr.length - 1] += 1;
   } else {
      let subArr = arr.slice(0, arr.length);
      console.log(subArr); 
      arr = addOne(subArr).concat([0]) 
   };

   return arr;
};

module.exports = {
   addOne,    
}