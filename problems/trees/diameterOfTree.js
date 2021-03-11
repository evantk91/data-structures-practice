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

function diameterOfBinaryTree(root) {
   // Given the root of a binary tree, returns the diameter of the binary tree

   return diameterOfBinaryTreeFunc(root);
}

function diameterOfBinaryTreeFunc(root) {
   if(!root) {
      return [0, 0];    
   }

   console.log(diameterOfBinaryTreeFunc(root.left));
   [leftHeight, leftDiameter] = diameterOfBinaryTreeFunc(root.left);
   console.log(diameterOfBinaryTreeFunc(root.right));
   [rightHeight, rightDiameter] = diameterOfBinaryTreeFunc(root.right);

   let currentHeight = Math.max(leftHeight, rightHeight) + 1;
   let heightDiameter = leftHeight + rightHeight;
   let currentDiameter = Math.max(leftDiameter, rightDiameter, heightDiameter);

   console.log(currentHeight, '-', currentDiameter);
   return [currentHeight, currentDiameter];
} 

let arr = [1, 2, 3, 4, null, 5, null, null, null, null, null];
let tree = convertArrayToBT(arr);
console.log(BFS(tree));

module.exports = {
   diameterOfBinaryTree,
   convertArrayToBT    
}