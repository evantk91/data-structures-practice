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

   //call recursively on each index
   let smallOutput = returnSubsets(arr, idx + 1);

   let output = [];
   //store existing subsets in output from previous iteration
   for(let i = 0; i < smallOutput.length; i++) {
      output.push(smallOutput[i]);   
   }

   //create subsets using subsets from the previous recursive call
   //starting with element at the current index starting from the end of the array
   for(let j = 0; j < smallOutput.length; j++) {
      let current = [];
      current.push(arr[idx]);
      current = current.concat(smallOutput[j]);
      output.push(current);
   }

   return output;
}

module.exports = {
   subsets,
   returnSubsets,    
};