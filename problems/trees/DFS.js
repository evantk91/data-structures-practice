const { Node, Tree } = require('./tree.js');
const { Stack } = require('./stack.js');

const tree = new Tree('apple');
tree.getRoot().setLeftChild('banana');
tree.getRoot().getLeftChild().setLeftChild('dates');
tree.getRoot().setRightChild('cherry');
console.log(tree);

// const stack =  new Stack();
// stack.push('apple');
// stack.push('banana');
// stack.push('cherry');
// stack.push('dates');
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);

function preOrderDFS(tree) {
   //initialize visit order and stack 
   let visitOrder = [];
   let stack = new Stack();
   
   //start at the node, visit it and add to the stack
   let node = tree.getRoot();
   stack.push(node);
   node = stack.top();
   
   visitOrder.push(node.getValue());

   //check if apple has a left child
   //add to stack any left child
   if(node.hasLeftChild()) {
      node = node.getLeftChild;
      stack.push(node);    
   }

   console.log("visit order :", visitOrder);
   console.log("stack: ", stack);
}

DFS(tree);