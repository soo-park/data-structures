var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //add key value pair to storage obj
    storage[size] = value;
    //increment size
    size++;
  };

  someInstance.pop = function() {
    if (size !== 0) {
      //decrement size
      size--;      
    }
    // assign value to last key of obj
    var poppedValue = storage[size];
    // delete last value from storage
    storage[size] = undefined;
    return poppedValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
