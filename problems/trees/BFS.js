const { Node, Tree } = require('./tree.js');
const { Queue } = require('./queue.js');

//sets up tree 
const tree = new Tree('apple');
tree.getRoot().setLeftChild('banana');
tree.getRoot().getLeftChild().setLeftChild('dates');
tree.getRoot().setRightChild('cherry');

// const q = new Queue();
// q.enq('apple');
// q.enq('banana');
// q.enq('cherry');
// console.log(q.deq());
// console.log(q.queue);

function BFS(tree) {
    //initialize queue and visit order
    let q = new Queue()
    let visitOrder = [];
 
    //store root node in queue
    let node = tree.getRoot();
    q.enq(node);
 
    //while there are node in the queue
    while(q.length() > 0) {
       //visit node at the front of the queue
       node = q.deq();
       visitOrder.push(node.value);
 
       //enqueue nodes children
       if(node.hasLeftChild()) {
          q.enq(node.getLeftChild());
       }
       if(node.hasRightChild()) {
          q.enq(node.getRightChild());
       }
    }
 
    return visitOrder;
 }
 
 module.exports = {
    BFS,    
 }