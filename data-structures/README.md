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
