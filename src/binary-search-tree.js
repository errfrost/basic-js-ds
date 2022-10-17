const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.tree ? this.tree : null;
  }

  add(data) {
    let newNode = new Node(data);

    function addNode(node,tree) {
      if (node.data < tree.data) {
        if (!tree.left)
          tree.left = node;
        else {
          tree = tree.left;
          addNode(node,tree);
        }            
      }
      else if (node.data > tree.data) {
        if (!tree.right)
          tree.right = node;
        else {
          tree = tree.right;
          addNode(node,tree);
        }
      }      
    }

    if (this.tree) {
      let tree = this.tree;
      addNode(newNode, tree);
    }
    else      
      this.tree = newNode;
  }

  has(data) {
    function isData(tree) {
      if (tree.data === data)
        return true;
      else if (tree.data > data)
        tree = tree.left;
      else
        tree = tree.right;

      return tree ? isData(tree):false;
    }

  if (this.tree) {
    let tree = this.tree;
    return isData(tree);
    }
    else
      return false;
  }

  find(data) {
    function findData(tree) {
      if (tree.data === data)
        return tree;
      else if (tree.data > data)
        tree = tree.left;
      else
        tree = tree.right;

      return tree ? findData(tree):null;
    }
  
    if (this.tree) {
      let tree = this.tree;
      return findData(tree);
    }
    else
      return false;
  }

  remove(data) {
    function removeNode(tree, data) {
      if (tree) {
        if (data < tree.data) {
          tree.left = removeNode(tree.left, data);
          return tree;
        }
        else if (data > tree.data) {
          tree.right = removeNode(tree.right, data);
          return tree;
        }
        else {
          if (!tree.left && !tree.right)
            return null;
          else if (!tree.left) {
            tree = tree.right;
            return tree;
          }
          else if (!tree.right) {
            tree = tree.left;
            return tree;
          }

          let rightNode = tree.right;
          while (rightNode.left) {
            rightNode = rightNode.left;
          }
          tree.data = rightNode.data;
          tree.right = removeNode(tree.right, rightNode.data);
          return tree;
        }
      } 
      else 
        return null;
    }

    this.tree = removeNode(this.tree, data);
  }

  min() {
    if (this.tree) {
      let tree = this.tree;
      while (tree.left) {
        tree = tree.left;
      }
      return tree.data;
    }
    else
      return null;
  }

  max() {
    if (this.tree) {
      let tree = this.tree;
      while (tree.right) {
        tree = tree.right;
      }
      return tree.data;
    }
    else
      return null;
  }
}

module.exports = {
  BinarySearchTree
};