// Instantiate a new graph
// Pomander linter checked
var Graph = function() {
  this.edge = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //is node key exist?
  return this.edge[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // visit every nodes in the edge and delete toNodes from array  
  for (let i = 0; i < this.edge[node].length; i++) {
    this.edge[this.edge[node][i]].splice(this.edge[this.edge[node][i]].indexOf(node));
  }

  // delete the node iteself
  delete this.edge[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if the fromNode exists inside toNodeEdge
  for (let i = 0; i < this.edge[fromNode].length; i++) {
    if (this.edge[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add toNode to the edge of the fromNode
  this.edge[fromNode].push(toNode);
  // add fromNode to the edge of the toNode
  this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let fromNodeEdge = this.edge[fromNode];
  let toNodeEdge = this.edge[toNode];
  fromNodeEdge.splice(fromNodeEdge.indexOf(toNode));
  toNodeEdge.splice(toNodeEdge.indexOf(fromNode));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.edge, function(item, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = O(1), contains = O(1), removeNode = O(n), hasEdge = O(n)
 * addEdge = O(1), removeEdge = O(1), forEachNode = O(n)  
 */


