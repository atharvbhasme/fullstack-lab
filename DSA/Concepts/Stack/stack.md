# Stack (LIFO)

A **Stack** stores data in Last-In-First-Out order:  
The last item added is the first to be removed.

## Common Operations

- **push(data):** Add item
- **pop():** Remove top item
- **peek():** View top item
- **isEmpty():** Check if stack is empty
- **size():** Number of items

---

## Stack with Array

```js
class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
```

---

## Stack with Linked List

```js
class Node {
  constructor(data) { this.data = data; this.next = null; }
}
class StackLinkedList {
  constructor() { this.head = null; this.size = 0; }
  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return null;
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }
  peek() { return this.head ? this.head.data : null; }
  isEmpty() { return this.size === 0; }
  sizeOfStack() {
```
