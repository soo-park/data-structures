// Pomander linter checked
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeCounter = 0;
  this.storage = {};
};


Stack.prototype.size = function() {
  return this.sizeCounter;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeCounter] = value;
  this.sizeCounter++;
};

Stack.prototype.pop = function() {
  if (this.sizeCounter !== 0) {
    this.sizeCounter--;
  }

  var poppedValue = this.storage[this.sizeCounter];
  // delete last value from storage
  this.storage[this.sizeCounter] = undefined;
  return poppedValue;
};

