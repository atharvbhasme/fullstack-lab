class Queue {
  constructor() {
    this.item = {}; // Use an object for O(1) delete/access without re-indexing
    this.headIndex = 0; // Pointer to the front of the queue
    this.tailIndex = 0; // Pointer to the next position at the end of the queue
  }

  // O(1) - Add element to the end
  enqueue(data) {
    this.item[this.tailIndex] = data;
    this.tailIndex++;
  }

  // O(1) - Remove element from the front
  dequeue() {
    if (this.isEmpty()) {
      console.log(`No Elements in queue`);
      return undefined;
    }
    const element = this.item[this.headIndex];
    delete this.item[this.headIndex]; // O(1) operation
    this.headIndex++;
    return element;
  }

  // O(1) - find the peek element
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.item[this.headIndex];
  }

  // O(1) - isEmpty
  isEmpty() {
    return this.headIndex === this.tailIndex;
  }

  // O(1) - size of queue
  size() {
    return this.tailIndex - this.headIndex;
  }

  // Prints the queue contents based on the current head and tail pointers
  print() {
    const elements = [];
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      elements.push(this.item[i]);
    }
    console.log(elements.join("->"));
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

queue.dequeue();
queue.dequeue();

queue.print();

console.log(`Current Size of element is ${queue.size()}`);
console.log(`Current peek element is ${queue.peek()}`);
