// Pomander linter checked
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {  
  // generate a child node & push into the paraent.children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let childNode = {}; 
  // iterate through children node
  for (let i = 0; i < this.children.length; i++) {
    childNode = this.children[i];
    // check if the child.value is target
    if (childNode.value === target) {
      return true;
    // else if the current node has children
    } else if (childNode.children.length > 0) {
      // call contains function recursively
      if (childNode.contains(target)) {
        //return true only if target matches
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * O(n) for contains
 * assuming we know the index of the child, 
 * O(1) for addChild. 
 */
