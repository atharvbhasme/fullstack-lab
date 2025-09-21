//DLL is data strcuture that store the data and refference to prevoius and next node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //insert from head
  insertAtHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = null;
      this.head = newNode;
    }
    this.size++;
  }

  //insert at tail
  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.size++;
    }
  }

  //insert at position
  insertAtPosition(position, data) {
    const newNode = new Node(data);

    //invalide positon condition
    if (position < 0 || position > this.size) {
      console.log("Invalid position");
      return;
    }

    //check if postion is head
    if (position === 0) {
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
      return;
    }

    //check if position is tail
    if (position === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.size++;
      return;
    }

    //insert at middle
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === position) {
        const prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = current;
        current.prev = newNode;
        this.size++;
        return;
      }
      current = current.next;
      counter++;
    }
  }

  //Delete Node from DLL
  deleteNode(data) {
    if (!this.head) {
      console.log(`List it empty`);
      return;
    }

    let current = this.head;
    while (current) {
      //matches the data
      if (current.data === data) {
        // Case 1: Deleting the head
        if (!current.prev) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null; // list became empty
          }
        }

        // Case 2: Deleting the tail
        else if (!current.next) {
          this.tail = current.prev;
          this.tail.next = null;
        }

        // Case 3: Deleting a middle node
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;
        return; // exit after deleting
      }
      current = current.next; // move forward
    }

    console.log(`Node with data "${data}" not found`);
  }

  //check if node is present for not
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    console.log(`${data} not present in Doubly Linked List`);
  }

  //print the DLL from backward:tail to head
  printBackward() {
    let current = this.tail;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    console.log(result.join("<->"));
  }

  //print the DLL from forward:head to tail
  printForward() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join("<->"));
  }
}

const dLL = new DoublyLinkedList();
dLL.insertAtHead("frist Data");
dLL.insertAtHead("second data");
dLL.insertAtHead("third data");
dLL.insertAtPosition(3, "fourth data");
dLL.insertAtTail("seocnd last data");
dLL.insertAtTail("last data");
// dLL.printBackward();
dLL.deleteNode("third data");
dLL.printForward();
console.log(`Data is present at ${dLL.search("last data")}`);
