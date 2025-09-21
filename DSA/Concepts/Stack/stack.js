//what is stack ?
// Stack is data strcutre that store data in LIFO(Last In Frist Out)
// means element added in last will be removed or accessed frist

//Stack using Array
class Stack {
  constructor() {
    this.items = [];
  }

  //push
  push(data) {
    this.items.push(data);
  }

  //pop
  pop() {
    this.items.pop();
  }

  //size of stack
  size() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.length;
  }

  // Check empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Peek element
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  //print
  print() {
    console.log(this.items.join(`->`));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push("string data");
stack.push(["array data"]);
stack.push({
  name: "object data",
});

stack.print();

stack.pop();

stack.pop();

const currentPeakElement = stack.peek();
console.log(`Peak is ${currentPeakElement}`);
