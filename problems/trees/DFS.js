const { Node, State, Tree } = require('./tree.js');
const { Stack } = require('./stack.js');
const { Queue } = require('./queue.js');

//sets up tree 
const tree = new Tree('apple');
tree.getRoot().setLeftChild('banana');
tree.getRoot().getLeftChild().setLeftChild('dates');
tree.getRoot().setRightChild('cherry');

function preOrderDFS(tree) {
   //initialize visit order and stack 
   let visitOrder = [];
   let stack = new Stack();
   
   //start at the node, visit it and add to the stack
   let node = tree.getRoot();
   visitOrder.push(node.getValue());
   let state = new State(node);
   stack.push(state);

   while(node) {
      console.log("current node: ", node);
      console.log("stack: ", stack);

      if(node.hasLeftChild() && !state.getVisitedLeft()) {
         //mark as visited 
         state.setVisitedLeft();
         //get left child, add to visit order, and update state
         node = node.getLeftChild();
         visitOrder.push(node.getValue());
         state = new State(node);
         stack.push(state);   
      } else if(node.hasRightChild() && !state.getVisitedRight()) {
         //mark as visited 
         state.setVisitedRight();
         //get right child, add to visit order, and update state
         node = node.getRightChild();
         visitOrder.push(node.getValue());
         state = new State(node);
         stack.push(node);
      } else {
         //remove node from the top of the stack 
         stack.pop(); 
         if(!stack.isEmpty()) {
            state = stack.top();
            node = state.getNode();    
         } else {
            node = null;    
         }   
      }    
   }
//    console.log("visit order :", visitOrder);
//    console.log("stack: ", stack);

   return visitOrder;
}

//console.log(preOrderDFS(tree));

function preOrderRecursive(tree) {
   let visitOrder = [];
   
   function traverse(node) {
      if(node) {
         visitOrder.push(node.getValue());
         traverse(node.getLeftChild());
         traverse(node.getRightChild());
      }
   }

   traverse(tree.getRoot());
   return visitOrder;
}

//console.log(preOrderRecursive(tree));

function inOrder(tree) {
   let visitOrder = [];

   function traverse(node) {
      if(node) {
         traverse(node.getLeftChild());
         visitOrder.push(node.getValue());
         traverse(node.getRightChild());
      }   
   }

   traverse(tree.getRoot());
   return visitOrder;
}

//console.log(inOrder(tree));

function postOrder(tree) {
   let visitOrder = [];

   function traverse(node) {
      if(node) {
         traverse(node.getLeftChild());
         traverse(node.getRightChild());
         visitOrder.push(node.getValue());
      }
   }

   traverse(tree.getRoot());
   return visitOrder;
}

//console.log(postOrder(tree));