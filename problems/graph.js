class Graph {
    constructor() {
        this.adjList = {};
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    addEdges(srcValue, destValue) {
        if (!this.adjList[srcValue]) {
            this.adjList[srcValue] = [];
        }
        if (!this.adjList[destValue]) {
            this.adjList[destValue] = [];
        }
        this.adjList[srcValue].push(destValue);
        this.adjList[destValue].push(srcValue);
    }
    buildGraph(edges) {
        let graph = {};
        edges.forEach((connection) => {
            this.addEdges(connection[0], connection[1]);
        });
        return this.adjList;
    }
    breadthFirstTraversal(startingVertex) {
        //no recursion!
        let adjList = this.adjList;
        const visited = new Set();
        const queue = [startingVertex];
        // visited.add(startingVertex);
        let results = [];
        while(queue.length > 0){
          const val = queue.shift();
          if(visited.has(val)){
            continue;
          }
          results.push(val);
          visited.add(val);
          queue.push(...adjList[val]);
        }
        return results;
    }
    depthFirstTraversalIterative(startingVertex) {
        let visited = new Set();
        let stack = [ startingVertex ];
        let results = [];

        while (stack.length) {
            let currentNode = stack.pop();

            if (visited.has(currentNode)) continue;

            results.push(currentNode);
            visited.add(currentNode);

            stack.push(...this.adjList[currentNode]);
        }
        return results;
    }
    depthFirstTraversalRecursive(
        startingVertex,
        visited = new Set(),
        vertices = []
    ) {
        // if this node has already been visited, then return early
        if (visited.has(startingVertex)) return;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        vertices.push(startingVertex);
        visited.add(startingVertex);

        // then explore each of its neighbors
        this.adjList[startingVertex].forEach(neighbor => {
            this.depthFirstTraversalRecursive(neighbor, visited, vertices);
        });
      return vertices;
    }
}
let test = new Graph();
// test.addVertex('a')
console.log("test.addVertex('a')", test.addVertex("a"), test);
module.exports = {
    Graph,
};
