var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  
  obj.data = {};

  obj.sizeCounter = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size: function() {
    return this.sizeCounter;
  },
  enqueue: function(value) {
    this.data[this.sizeCounter] = value;
    this.sizeCounter++;
  },
  dequeue: function() {
    if (this.sizeCounter !== 0 ) {
      this.sizeCounter--;
    }

    var dequeueValue = this.data[0];
    
    for (var key in this.data) {
      if (key >= 1) {
        this.data[key - 1] = this.data[key];
      }
    }

    this[this.sizeCounter] = undefined;
    
    return dequeueValue;
  }
};
