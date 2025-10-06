class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.sizeCount = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.sizeCount++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return;
    } else {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
    }
    this.sizeCount--;
  }

  peek() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return;
    }
    return this.head.data;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return;
    }
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join("->"));
  }

  size() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return 0;
    }
    return this.sizeCount;
  }
}

const queue = new QueueUsingLinkedList();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();

queue.dequeue();
queue.dequeue();

queue.print();

console.log(`Peek is ${queue.peek()}`);

console.log(`size of ${queue.size()}`);
