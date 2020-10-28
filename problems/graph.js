
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if(!this.adjList[vertex]){
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    if(!this.adjList[srcValue]){
      this.adjList[srcValue] = [];
    }
    if(!this.adjList[destValue]){
      this.adjList[destValue] = [];
    }
    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

let test = new Graph();
// test.addVertex('a')
console.log("test.addVertex('a')", test.addVertex('a'), test);

module.exports = {
  Graph
};
