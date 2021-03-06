// Pomander linter checked
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add item as key in storage object
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  // check if item exists as a key of storage object and return the result
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add = O(1), contains = O(1), remove = O(1)
 */
