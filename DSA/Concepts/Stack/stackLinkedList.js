class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // every node points to the next node
  }
}

class StackLinkedList {
  constructor() {
    this.head = null; // top of stack
    this.size = 0;
  }

  // Push element
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // new node points to current head
    this.head = newNode; // new node becomes head
    this.size++;
  }

  // Pop element
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    const removed = this.head;
    this.head = this.head.next;
    this.size--;
    return removed.data; // return popped value
  }

  // Peek top element
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    return this.head.data;
  }

  // Check empty
  isEmpty() {
    return this.size === 0;
  }

  // Size
  sizeOfStack() {
    return this.size;
  }

  // Print stack
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example usage
const stack = new StackLinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Stack before pop:");
stack.print(); // 4 -> 3 -> 2 -> 1

console.log("Popped:", stack.pop()); // 4
console.log("Popped:", stack.pop()); // 3

console.log("Stack after deletion:");
stack.print(); // 2 -> 1

console.log(`Current size: ${stack.sizeOfStack()}`); // 2
console.log("Top element:", stack.peek()); // 2
