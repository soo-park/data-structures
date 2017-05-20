// Pomander linter checked
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToHead = function(value) { 
    var newNode = Node(value); 
    //when head is null : when it's first insertion 
    if (list.head === null) {
      
      //assign head to new node
      list.head = newNode; 
      //assign tail to what head is pointing to  
      list.tail = list.head;   
    } else {
      //assign next to new node
      newNode.next = list.head;  
      list.head.prev = newNode;
      list.head = newNode;
    } 

  }; 

  list.removeTail = function() { 
    // check if node is empty
    if (list.head !== null) {
      if (list.head === list.tail) {
        list.head = null;
      }
      //reassign previous node's next to null
      list.tail.next = null;    
      //reassign tail to previous node
      list.tail = list.tail.prev;
    }
    
  };


  list.addToTail = function(value) {
    var newNode = Node(value); 
    //when head is null : when it's first insertion 
    if (list.head === null) {
      
      //assign head to new node
      list.head = newNode; 
      //assign tail to what head is pointing to  
      list.tail = list.head;   
    } else {
      //assign next to new node
      list.tail.next = newNode;
      //assign previous tail to new node
      list.tail = list.tail.next;   
    } 
  };

  list.removeHead = function() {
    //store value of node to be removed
    var value = list.head.value;
    //point head to where next is pointing to
    list.head = list.head.next;
    //return the value of removed node
    return value; 
  };

  list.contains = function(target) {
    //assign current node to where head is pointing to
    var current = list.head;
    //iterate through each node
    while (current !== null) {
      //check if value in current node is same as target
      if (current.value === target) {
        return true;
      }
      //move to next node
      current = current.next;
    }
    //return false
    return false; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: addToTail -> O(1), removeHead -> O(1), contains -> O(n)   
*/
