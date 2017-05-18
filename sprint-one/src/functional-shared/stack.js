var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.sizeCounter = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return this.sizeCounter; 
  },
  push: function(value) {
    this[this.sizeCounter] = value; 
    this.sizeCounter++;
  },
  pop: function() {
    if (this.sizeCounter !== 0) {
      this.sizeCounter--;
    }
    var poppedValue = this[this.sizeCounter];
    this[this.sizeCounter] = undefined;
    return poppedValue;     
  }

};

