const { Node } = require('./tree.js');
const { Queue } = require('./queue.js');
const { BFS } = require('./BFS.js');

class Tree {
   constructor() {
      this.root = null;    
   }

   setRoot(value) {
      this.root = new Node(value);    
   }
  
   getRoot() {
      return this.root;    
   }
   
   compare(node, newNode) {
      if(newNode.getValue() === node.getValue()) {
         return 0;
      } else if(newNode.getValue() < node.getValue()) {
         return -1; 
      } else {
         return 1;    
      }             
   }

   insertWithLoop(value) {
      let newNode = new Node(value);
      let node = this.getRoot();
      
      if(node === null) {
         this.root = newNode;
         return; 
      };

      while(true) {
         let comparison = this.compare(node, newNode);
         if(comparison === 0) {
            node.setValue(value);
            break;    
         } else if(comparison === -1) {
            if(node.hasLeftChild()) {
               node = node.getLeftChild();    
            } else {
               node.setLeftChild(value);
               break;    
            }
         } else {
            if(node.hasRightChild()) {
               node = node.getRightChild();
            } else {
               node.setRightChild(value); 
               break;
            }
         }
      }
   }

   insertWithRecursion(value) {
      let node = new Node(value); 
      if(this.getRoot() === null) {
         this.setRoot(value);
         return;       
      }    
      this.insertRecursively(this.getRoot(), node);
   }

   insertRecursively(node, newNode) {
      let comparison = this.compare(node, newNode);
      if(comparison === 0) {
         node.setValue(newNode.getValue());
      } else if(comparison === -1) {
         if(node.hasLeftChild()) {
            this.insertRecursively(node.getLeftChild(), newNode);    
         } else {
            node.setLeftChild(newNode.value);    
         }   
      } else {
        if(node.hasRightChild()) {
            this.insertRecursively(node.getRightChild(), newNode);    
         } else {
            node.setRightChild(newNode.value);    
         }       
      }   
   }

   search(value) {
      let node = this.getRoot();
      let searchNode = new Node(value);
      
      while(true) {
         let comparison = this.compare(node, searchNode);
         if(comparison === 0) {
            return true;
         } else if(comparison === -1) {
            if(node.hasLeftChild()) {
               node = node.getLeftChild();    
            } else {
               return false;    
            }
         } else {
            if(node.hasRightChild()) {
               node = node.getRightChild();
            } else {
               return false; 
            }    
         }   
      }
   }
}

const tree = new Tree();
tree.insertWithRecursion(5);
tree.insertWithRecursion(6);
tree.insertWithRecursion(4);
tree.insertWithRecursion(2);
tree.insertWithRecursion(1);
tree.insertWithRecursion(5);

console.log(tree);
console.log(tree.search(1));