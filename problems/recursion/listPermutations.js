function permute(input) {
   // given a list of items to be permuted
   // returns a list of permutations with each permuted item being represented;

   let permutationList = [];

   //base case - if input is empty, push empty array to permutation list
   if(input.length === 0) {
      permutationList.push([]);    
   } else {
      //remove first element of the list to be permuted for each sublist
      let first = input[0];
      let remainingList = input.slice(1, input.length);
      
      // call recursively on remaining list
      let subList = permute(remainingList);

      //iterate through sublist returned from previous recursive call
      for(let i = 0; i < subList.length; i++) {
         let arr = subList[i]; 
        //insert first element into all possible position for each element of the sublist
         for(let j = 0; j <= arr.length; j++) {
            let arrCopy = Object.assign([], arr);
            arrCopy.splice(j, 0, first);
            //push each new list into permutation list
            permutationList.push(arrCopy);
         }; 
      };
   };

   console.log(permutationList)
   return permutationList;
}

module.exports = {
   permute, 
}