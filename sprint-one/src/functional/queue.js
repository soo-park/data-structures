var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size !== 0) {
      size--;
    }
    
    var dequeuedValue = storage[0];
    storage[0] = undefined;
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }  
    storage[size] = undefined;
    return dequeuedValue; 
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
