// Binary search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while(current) {
      if(value === current.value) {
        // No repeated values allowed
        return undefined;
      }

      if(value < current.value) {
        if(!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if(!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if(!this.root) {
      return false;
    }

    let current = this.root;
    let found = false;

    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if(!found) {
      return undefined;
    }

    return found;
  }

  inOrderDFS(node) {
    if(node === null) {
      return;
    }
    this.inOrderDFS(node.left);
    console.log(node.value + " ");
    this.inOrderDFS(node.right);
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(current, value) {
    if(!current) {
      return current;
    }

    if(value === current.value) {
      // for nodes without child or with only one child
      if(!current.left && !current.right) {
        return null;
      } else if(!current.left) {
        return current.right;
      } else if(!current.right) {
        return current.left;
      } else {
        // for nodes with twi children, we need to find the correct successor
        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;

        // delete the in order successor
        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }
    } else if(value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  kthSmallestNode(node) {
    while(!node.left === null) {
      node = node.left;
    }
    return node;
  }

  
}

// Function to find the height of the binary tree
function findHeight(root) {
  if (!root) {
      return -1;
  }

  let leftHeight = findHeight(root.left);
  let rightHeight = findHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Helper function to perform inorder traversal 
// and populate the 2D matrix
function inorder(root, row, col, height, ans) {
  if (!root) {
      return;
  }

  // Calculate offset for child positions
  let offset = Math.pow(2, height - row - 1);

  // Traverse the left subtree
  if (root.left) {
      inorder(root.left, row + 1, col - offset, 
              height, ans);
  }

  // Place the current node's value in the matrix
  ans[row][col] = root.value.toString();

  // Traverse the right subtree
  if (root.right) {
      inorder(root.right, row + 1, col + offset, 
              height, ans);
  }
}

// Function to convert the binary tree to a 2D matrix
function treeToMatrix(root) {

  // Find the height of the tree
  let height = findHeight(root);

  // Rows are height + 1; columns are 2^(height+1) - 1
  let rows = height + 1;
  let cols = Math.pow(2, height + 1) - 1;

  // Initialize 2D matrix with empty strings
  let ans = Array.from({ length: rows }, () =>
            Array(cols).fill(""));

  // Populate the matrix using inorder traversal
  inorder(root, 0, Math.floor((cols - 1) / 2), 
          height, ans);

  return ans;
}

// Function to print a 2D matrix
function print2DArray(arr) {
  arr.forEach(row => {
      console.log(row.map(cell => cell === "" 
                             ? " " : cell).join(""));
  });
}

const searchTree = new BinarySearchTree();
searchTree.insert(10);
searchTree.insert(40);
searchTree.insert(50);
searchTree.insert(20);
searchTree.insert(30);
searchTree.inOrderDFS(searchTree.root);

console.log(searchTree.find(23));
console.log(searchTree.find(30));

searchTree.remove(40);
// searchTree.remove(41);

searchTree.inOrderDFS(searchTree.root);

let result = treeToMatrix(searchTree.root);
print2DArray(result);
