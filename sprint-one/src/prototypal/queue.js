// Pomander linter checked
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.sizeCounter = 0;
  
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.sizeCounter;
};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeCounter] = value;
  this.sizeCounter++;
};

queueMethods.dequeue = function() {
 
  if (this.sizeCounter !== 0) {
    this.sizeCounter--;
  }
  
  var dequeueValue = this.storage[0];

  for (var key in this.storage) {
    if (key >= 1) {
      this.storage[key - 1] = this.storage[key];
    }
  }
  
  this[this.sizeCounter] = undefined;

  return dequeueValue;
};


