function subsets(arr) {
   //given a list of numbers 
   //return list of lists where each list represents a subset

   return returnSubsets(arr, 0);
}

function returnSubsets(arr, idx) {
   //base case - when index reaches the end of the array
   if(idx >= arr.length) {
      return [[]];   
   }

   let smallOutput = returnSubsets(arr, idx + 1);

   let output = [];
   for(let i = 0; i < smallOutput.length; i++) {
      output.push(smallOutput[i]);   
   }

   for(let j = 0; j < smallOutput.length; j++) {
      let current = [];
      current.push(arr[idx]);
      current.concat(smallOutput[j]);
      output.push(current);
   }

   return output;
}

module.exports = {
   subsets,
   returnSubsets,    
};