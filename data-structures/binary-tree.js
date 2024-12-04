// Binary tree 

//         2
//       /  \
//     3     4
//   /   \
//  5     6

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

const firstNode = new Node(2);
const secondNode = new Node(3);
const thirdNode = new Node(4);
const fourthNode = new Node(5);
const fifthNode = new Node(6);

firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;
secondNode.right = fifthNode;

// Traversal
// In order DFS(Depth first search): left, root, right
const inOrderDFS = (node) => {
  // node: starting point of the traversal
  if(node === null) {
    return;
  }
  inOrderDFS(node.left);
  console.log(node.data + " ");
  inOrderDFS(node.right);
}

// Pre order DFS: root, left, right
const preOrderDFS = (node) => {
  if(node === null) {
    return;
  }

  console.log(node.data, " ");
  preOrderDFS(node.left);
  preOrderDFS(node.right);
}

// Pos order DFS: left, right, root
const postOrderDFS = (node) => {
  if(node === null) {
    return;
  }
  postOrderDFS(node.left);
  postOrderDFS(node.right);
  console.log(node.data, " ");
}

// BFS (Breadth first search): Level order traversal
const bfs = (node) => {
  if(!node) {
    return;
  }
  let queue = [node];
  while(queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.data, " ");
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

console.log('In order DFS: ');
inOrderDFS(firstNode);

console.log('Pre order DFS: ');
preOrderDFS(firstNode);

console.log('Post order DFS: ');
postOrderDFS(firstNode);

console.log('Level order:: ');
bfs(firstNode);
