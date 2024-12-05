## Data structures
There are types of data structures:

1. Linear
2. Non linear

### Linear
Elements are arranged in one single dimension. Like:
* List (Static)
* Stack (Dynamic)
* Queue (Dynamic)
* Linked list (Dynamic)

## Non linear
* Tree
* Graph
* Table

### Linked Lists
In this linear data structure, the elements are 
not sorted at a contiguous location, the elements are linked using 
pointers.
Linked lists are more efficient than arrays for insertion and deletion

#### Singly linked list
A node will contain a data (the actual information to store) and a reference (the address for the next node in sequence) for the next node.
The last node will have a reference with a null value, indicating the end of the list.

#### Transversal
Is like a map in array, it visits every node in the list and perform some operation in the data.

#### Doubly linked lists
Are more efficient than singly linked list due to the traversal in both directions. However, its logic is more complex and it requires manage previous and next references.

> Applications of doubly linked lists:
> Implementation of undo and redo for text editors.
> cache
> browser history management
> Music playlists and navigation feature

## Stack
Is a linear data structure that follows two orders LIFO(Last in first out)
or FILO(First in last out), also, all insertions and deletions are permitted at only one end of the stack.

Real world applications:
* Managing functions: js uses stack to keep track of functions. When a function is called, it goes on the stack. When is done, to comes off. (Event loop)
* Undo buttons: like in a text editor
* Solving puzzles

### Queue
Is like stacks, but the order is FIFO (First in First out). The items are inserted at one end and deleted from the other end.

## Binary tree
Is a non linear data structure, where each node has at most two children referred as left child and the right child.

Binary trees provides clear hierarchy, so the data is easy to understand.
Also, recursive algorithms are a perfect fit for trees. And is efficient for handling large datasets in dynamic scenarios.

Applications of binary trees:
* DOM in HTML
* File explorer
* Routing Algorithms

However, binary trees represents a complexity to keep the tree balanced.
Binary trees nodes can only have 2 children, which is limited for more complex structures.

## Binary search tree
Binary search trees are like regular binary tree with the following rules.
* The left node always is less than the root node
* The right node is always greater than the root node
* Theres no duplicated keys in the tree.

## Heap
A heap is a complete binary tree (all levels of the tree are filled completely, except the lowest level nodes which are filled from as left as possible) in which for every node, the value of its children is greater than or equal to its own value.

Heap uses array as a data base, however, the search, insertions and deletions complexity are low due to the fact that is easy to predict the indexes of the data we need. (we do not need to go trough the whole array fro that)

### Max Heap:
The root must be greater or equal than all his children

### Min Heap:
The root must be less or equal than all his children

Applications: 
* Priority queues


### Hashing
Hashing is way to store values in an array, defining the index to insert the value with a mathematical formula based on the actual value and the dimensions of the array.
This technique ensures a way to calculate very fast where is the value stored in the array. and making it easier to find, insert or delete.

Hashing has a problem and is the collisions, in which two different values can result in the same index to insert. However, there are techniques to solve these collision problems in a clever way.

- Hash applications:
  * databases for indexing data
  * In javascript to implement objects

However, hashing can be inefficient if the data causes a lot of collisions. And Hash does not allow null values.
