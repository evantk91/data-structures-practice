const { Node, Tree } = require('./tree.js');

const tree = new Tree('apple');
tree.getRoot().setLeftChild('banana');
tree.getRoot().getLeftChild().setLeftChild('dates');
tree.getRoot().setRightChild('cherry');
console.log(tree);