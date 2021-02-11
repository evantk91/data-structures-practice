function deepReverse(input) {
   //takes in a list as input and returns a list that is the deep reverse of the input
   //if any elements are lists themselves, the elements in the list are reversed
   
   let output = [];
   
   //base case - if input is a number, add number to output
   if(input.length === 1) {
      output.unshift(input);
   } else {
      for(let i = 0; i < input.length; i++) {
         let item = input[i];
         let reversedItem;
         if(item.length > 1) {
            reversedItem = deepReverse(item);
            output.unshift(reversedItem);    
         } else {
            output.unshift(item); 
         }; 
      };
   };

   return output; 
};

module.exports = {
   deepReverse,    
}