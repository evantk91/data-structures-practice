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
         currentNode.left = leftChild;
         q.enq(leftNode);   
      }
      let rightChild = arr[idx];
      idx += 1;
      if(rightChild) {
         rightNode = new Node(rightChild);
         currentNode.right = rightChild;
         q.enq(rightNode);     
      }
   }

   return tree;
}

function diameterOfBinaryTree(root) {
    // Given the root of a binary tree, returns the diameter of the binary tree
}

let arr = [1, 2, 3, 4, null, 5, null, null, null, null, null];
let tree = convertArrayToBT(arr);
console.log(BFS(tree))

module.exports = {
   diameterOfBinaryTree,    
}