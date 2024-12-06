// Graphs
// Undirected graph with linked lists
class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if(!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.list[vertex1] = this.list[vertex1].filter(vertex => vertex !== vertex2);
    this.list[vertex2] = this.list[vertex2].filter(vertex => vertex !== vertex1);
  }

  removeVertex(vertex) {
    let edges = this.list[vertex];
    for(let edge of edges) {
      this.removeEdge(vertex, edge);
    }

    delete this.list[vertex];
  }
}

const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addEdge(1, 2);

console.log(myGraph.list);

myGraph.removeEdge(1, 2);

console.log(myGraph.list);

myGraph.removeVertex(1);
