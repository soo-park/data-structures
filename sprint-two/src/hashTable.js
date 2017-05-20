// Pomander linter checked
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if there is no bucket in the index location
  if (bucket === undefined) {
    // initialize bucket
    bucket = [[k, v]];
  } else {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        // push tuple of [k,v]
        bucket.push([k, v]);
      }
    }
  }

  // set the bucket to the storage
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // iterate the bucket
  for (let i = 0; i < bucket.length; i++) {
    // if the key of tuple matches k
    if (bucket[i] !== undefined && bucket[i][0] === k) {
      // return value
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // iterate the bucket
  for (let i = 0; i < bucket.length; i++) {
    // if the key of tuple matches k
    if (bucket[i][0] === k) {
      // assign it to undefined
      bucket[i] = undefined;
    }
  }
  
  this._storage.set(index, bucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O(1), retrieve = O(1), remove = O(1)
 */


