// Pomander linter checked
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // // generate prototype for Stack
  var obj = Object.create(stackMethods);
  obj.storage = {};
  // // determin size of the initial Stack
  obj.sizeCounter = 0;

  // // return the instantiated object
  return obj;

};

var stackMethods = {};

stackMethods.size = function() {
  return this.sizeCounter;
};

stackMethods.push = function(value) {
  this.storage[this.sizeCounter] = value;
  this.sizeCounter++;
};

stackMethods.pop = function() {
  if (this.sizeCounter !== 0) {
    this.sizeCounter--;
  }
  
  var poppedValue = this.storage[this.sizeCounter];
  // delete last value from storage
  this.storage[this.sizeCounter] = undefined;
  return poppedValue;
};
