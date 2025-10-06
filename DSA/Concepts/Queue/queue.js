//What is queue
//queue is Linear Data Strcutre that follows FIFO(Frist In Frist Out)
//frist added element will be removed frist

//Queue using array
class Queue {
  constructor() {
    this.item = [];
  }

  //add element in queue
  enqueue(data) {
    this.item.push(data);
  }

  //remove element from queue
  dequeue() {
    if (this.item.length <= 0) {
      console.log(`No Elements in queue`);
    }
    this.item.shift();
  }

  //find the peek element
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.item[0];
  }

  //isEmpty
  isEmpty() {
    return this.item.length === 0;
  }

  //size of queue
  size() {
    return this.item.length;
  }

  //print the queue
  print() {
    console.log(this.item.join("->"));
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
