var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  // debugger 
  // if the value is smaller than current node's value 
  if (value < this.value) {
    //if left is null
    if (this.left === null) {
      //insert to the left of the node
      this.left = new BinarySearchTree(value);
    } else {  
      //traverse to the left node
      this.left.insert(value);
    }
  } else {
    //if right is null
    if (this.right === null) {
      //insert to the right of the node
      this.right = new BinarySearchTree(value);
    } else {
      //traverse to the right node   
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (target) {
  // debugger
  // if the current node's value is same as target
  if (this.value === target) {
    return true;
  } else if (target > this.value) {
  // else target is larger than node's value
    // if the current node's right is null
    if (this.right === null) {
      return false;
    } else {
    // else
      // traverse right
      return this.right.contains(target);
    }
  } else if (target < this.value) {
  // else target is smaller than node's value
    // if the current node's left is null
    if (this.left === null) {
      return false;
    } else {
    // else
      // traverse left
      return this.left.contains(target); 
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function (func) {
  //apply function to a visited node's value
  func(this.value);
  //check if left node is not null
  if (this.left !== null) {
    //return traverse left
    return this.left.depthFirstLog(func);
  } else if (this.right !== null) {
  //check if right node is not null
    //return traverse right
    return this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O(log n), contains = O(log n), depthFirstLog = O(n)
 */
