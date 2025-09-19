//What is Single Linked List: SLL is data stcuture which has node consitance of data and refference to next
//node and last node refference will point to null.
//Linked List support efficent support and deletion opeartions

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// let head= new Node("Data of for frist node");

// head.next = new Node("Data for seconed node");

// head.next.next = new Node("Data for third node");

//operations on Sinlgy Linked List

class LinkedList {
  constructor() {
    this.head = null;
  }
  //Insert At head
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //Insert At End/tail
  insertAtEnd(data) {
    const newNode = new Node(data);
    //check if list is null ornot
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  //insert at position
  insertAtPosition(data, position) {
    const newNode = new Node(data);
    let counter = 0;
    if (this.head === null) {
      if (position !== 0) {
        console.log(`List is empty. Please enter positon as 0`);
      }
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    if (current.next !== null && counter < position - 1) {
      current = current.next;
      counter++;
    }

    // If position is out of range
    if (current === null) {
      console.log("Position out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  //delete node
  deleteNode(position) {
    let counter = 0;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
      return;
    }
    while (current.next !== null && counter < position - 1) {
      current = current.next;
      counter++;
    }
    // If position is out of range
    if (current === null || current.next === null) {
      console.log("Position out of range");
      return;
    }

    current.next = current.next.next;
  }

  //search the data in singly linked list
  search(data) {
    let current = this.head;
    let position = 0;

    while (current !== null) {
      if (current.data === data) {
        return position; // found
      }
      current = current.next;
      position++;
    }

    console.log("Data not exists in list");
    return -1; // indicate not found
  }

  //Print Linked List
  printList() {
    let current = this.head;
    let result = ``;
    while (current) {
      result += current.data + `->`;
      current = current.next;
    }
    console.log(result + `null`);
  }
}

const list = new LinkedList();
list.insertAtHead("second data");
list.insertAtHead("frist Data");
list.insertAtPosition("third positon", 2);
list.insertAtEnd({
  id: "one",
});
list.insertAtEnd("Last Data");
list.deleteNode(4);
const position = list.search(12);
console.log(`Position of data is ${position}`);
list.printList();
