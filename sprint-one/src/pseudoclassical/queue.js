// Pomander linter checked
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCounter = 0;
};

Queue.prototype.size = function() {
  return this.sizeCounter;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeCounter] = value;
  this.sizeCounter++;
};

Queue.prototype.dequeue = function() {
 
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



