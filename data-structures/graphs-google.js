// A -- B
// |    |  \
// C -- D -- J
// |    |    |
// E -- G -- H

// {
//   A: [B,C]
//   B: [A,D,J]
//   C: [A,E,D],
//   D: [B,C,J,G],
//   E: [C,G],
//   G: [E,D,H],
//   H: [G,J]
// . J: [B,D,H]
// }

class Graph {
  constructor() {
    this.list = {};
  }

  addNode(node) {
    this.list[node] = new Set();
  }

  addEdge(fromNode, toNode) {
    this.list[fromNode].add(toNode);
    this.list[toNode].add(fromNode);
  }

  deepFirstSearch(startNode, visited = new Set()) {
    visited.add(startNode);
    console.log(startNode);
    this.list[startNode].forEach((node) => {
      if(!visited.has(node)) {
        this.deepFirstSearch(node, visited);
      }
    });
  }

  breathFirstSearch(startNode) {
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);
    while(queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);
      this.list[currentNode].forEach((node) => {
        if(!visited.has(node)) {
          visited.add(node);
          queue.push(node);
        }
      });
    }
  }

  findShortestPath(source, target) {
    let currentLayer = [source];
    let nextLayer = [];
    let distance = 0;
    let visited = new Set();
    visited.add(source);

    while(currentLayer.length > 0) {
      for(let node of currentLayer) {
        if(node === target) {
          return distance;
        }

        for(let neighbor of this.list[node]) {
          if(!visited.has(neighbor)) {
            nextLayer.push(neighbor);
            visited.add(neighbor);
          }
        }
      }

      currentLayer = nextLayer;
      nextLayer = [];
      distance++;
    }

    return -1;
  }
}

const myGraph = new Graph();
myGraph.addNode('A');
myGraph.addNode('B');
myGraph.addNode('C');
myGraph.addNode('D');
myGraph.addNode('E');
myGraph.addNode('G');
myGraph.addNode('H');
myGraph.addNode('J');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');

myGraph.addEdge('B', 'A');
myGraph.addEdge('B', 'D');
myGraph.addEdge('B', 'J');

myGraph.addEdge('C', 'A');
myGraph.addEdge('C', 'E');
myGraph.addEdge('C', 'D');

myGraph.addEdge('D', 'B');
myGraph.addEdge('D', 'C');
myGraph.addEdge('D', 'J');
myGraph.addEdge('D', 'G');

myGraph.addEdge('E', 'C');
myGraph.addEdge('E', 'G');

myGraph.addEdge('G', 'E');
myGraph.addEdge('G', 'D');
myGraph.addEdge('G', 'H');

myGraph.addEdge('H', 'G');
myGraph.addEdge('H', 'J');

myGraph.addEdge('J', 'B');
myGraph.addEdge('J', 'D');
myGraph.addEdge('J', 'H');

console.log('deepFirstSearch ...');
myGraph.deepFirstSearch('A');
console.log('breathFirstSearch ...');
myGraph.breathFirstSearch('A');

console.log('ShortestPath A => J ...', myGraph.findShortestPath('A', 'J'));
console.log('ShortestPath E => J ...', myGraph.findShortestPath('E', 'J'));
