function lastIndex(arr, target) {
   //given an array and a target, find the last index of occurence of the target
   //if the target is not pressent, return -1    

   return lastIndexArr(arr, target, arr.length - 1);
}

function lastIndexArr(arr, target, index) {
   if(index < 0) {
      return -1;
   }
   
   if(arr[index] === target) {
      return index;    
   }

   return lastIndexArr(arr, target, index - 1);
}

module.exports = {
   lastIndex,
}