class Node {
   constructor(value = null) {
      this.value = value;
      this.left = null;
      this.right = null;        
   }
   
   getValue = function() {
      return this.value;    
   }

   setValue = function(value) {
      this.value = value;    
   }

   setLeftChild = function(value) {
      const node = new Node(value); 
      this.left = node;    
   }

   setRightChild = function(value) {
      const node = new Node(value);    
      this.right = node;    
   }

   getLeftChild = function() {
      return this.left;    
   }

   getRightChild = function() {
      return this.right;    
   }

   hasLeftChild = function() {
      return this.left !== null;    
   }

   hasRightChild = function() {
      return this.right !== null;    
   }
}

class State {
   constructor(node) {
      this.node = node;
      this.visitedLeft = false;
      this.visitedRight = false;   
   }
   
   getNode() {
      return this.node;   
   }

   getVisitedLeft() {
      return this.visitedLeft;
   }

   getVisitedRight() {
      return this.visitedRight;
   }

   setVisitedLeft() {
      this.visitedLeft = true;
   }

   setVisitedRight() {
      this.visitedRight = true;
   }
}

class Tree {
   constructor(value = null) {
      this.root = new Node(value);    
   }

   getRoot() {
      return this.root;    
   }
}

module.exports = {
   Node,
   State,
   Tree    
}