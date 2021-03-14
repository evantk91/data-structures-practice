const { Tree, Node } = require('./tree.js');
const { Queue } = require('./queue.js');
const { BFS } = require('./BFS.js');

function convertArrayToBT(arr) {
   let idx = 0;
     
   if(arr.length <= 0 || arr[0] === -1) {
      return null;    
   }
 
   //let root = new Node(arr[idx]);
   let tree = new Tree(arr[idx]);
   idx += 1;
   let q = new Queue();
   q.enq(tree.getRoot());
 
   while(q.length() !== 0) {
      let currentNode = q.deq();
      let leftChild = arr[idx];
      idx += 1;
      if(leftChild) {
         let leftNode = new Node(leftChild);
         currentNode.left = leftNode;
         q.enq(leftNode);   
      }
      let rightChild = arr[idx];
      idx += 1;
      if(rightChild) {
         rightNode = new Node(rightChild);
         currentNode.right = rightNode;
         q.enq(rightNode);     
      }
   }
 
   return tree;
}

function pathFromRootToNode(root, data) {
   //given a value representing a node, return the path from the root to that node in the form of a list
   let output = pathFromNodeToRoot(root, data);
   return output.reverse();
}

function pathFromNodeToRoot(root, data) {
   //base case - when root is null or the root matches the data point 
   if(!root) {
      return null;
   } else if(root.value === data) {
      return [data];
   };
   
   //add node data on path back to root 
   let leftAnswer = pathFromNodeToRoot(root.left, data);
   if(leftAnswer) {
      leftAnswer.push(root.value);
      return leftAnswer;
   }

   let rightAnswer = pathFromNodeToRoot(root.right, data);
   if(rightAnswer) {
      rightAnswer.push(root.value);
      return rightAnswer;
   }
   return null;
}

module.exports = {
   pathFromRootToNode,
   convertArrayToBT    
}