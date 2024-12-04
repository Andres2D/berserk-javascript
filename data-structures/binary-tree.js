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

// Insert: by default insertion always starts with the left child node.
const insert = (root, newValue) => {
  if(!root) {
    return new Node(newValue);
  }

  const queue = [root];

  while(queue.length > 0) {
    const temp = queue.shift();

    if(!temp.left) {
      temp.left = new Node(newValue);
      break;
    } else {
      queue.push(temp.left);
    }

    if(!temp.right) {
      temp.right = new Node(newValue);
      break;
    } else {
      queue.push(temp.right);
    }
  }

  return root;
}

// Search: can be done with BFS or DFS
const searchDFS = (root, value) => {
  if(!root) {
    return false;
  }

  if(root.data === value) {
    return true;
  }

  // Recursively search in left and right subtrees
  const leftSearch = searchDFS(root.left, value);
  const rightSearch = searchDFS(root.right, value);

  return leftSearch || rightSearch;
}

// Remove node from tree
const deleteNode = (root, value) => {
  if(!root) {
    return null;
  }

  let queue = [root];
  let target = null;

  while(queue.length > 0) {
    let current = queue.shift();

    if(current.data === value) {
      target = current;
      break;
    }

    if(current.left) {
      queue.push(current.left);
    }

    if(current.right) {
      queue.push(current.right);
    }
  }

  if(!target) {
    return root;
  }

  // fond the deepest rightmost node and its parent
  let lastNode = null;
  let lastParent = null;

  queue = [{ node: root, parent: null}];

  while(queue.length > 0) {
    let { node: current, parent } = queue.shift();
    lastNode = current;
    lastParent = parent;

    if(current.left) {
      queue.push({ node: current.left, parent: current });
    }

    if(current.right) {
      queue.push({ node: current.right, parent: current });
    }
  }

  // replace target's value with the last node's value
  target.data = lastNode.data;

  // Remove the last node
  if(lastParent) {
    if(lastParent.left === lastNode) {
      lastParent.left = null;
    } else {
      lastParent.right = null;
    }
  } else {
    return null;
  }

  return root;
}

console.log('In order DFS: ');
// inOrderDFS(firstNode);

console.log('Pre order DFS: ');
// preOrderDFS(firstNode);

console.log('Post order DFS: ');
// postOrderDFS(firstNode);

console.log('Level order:: ');
// bfs(firstNode);

console.log('Before insertion ::');
bfs(firstNode);
insert(firstNode, 11);
console.log('After insertion ::');
bfs(firstNode);

console.log(searchDFS(firstNode, 3));
console.log(searchDFS(firstNode, -9));
console.log(searchDFS(firstNode, 11));

console.log('+_+++++++++');

console.log('Before insertion ::');
inOrderDFS(firstNode);
deleteNode(firstNode, 3);
console.log('After insertion ::');
inOrderDFS(firstNode);

