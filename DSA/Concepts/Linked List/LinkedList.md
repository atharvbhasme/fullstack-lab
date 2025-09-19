# Linked List

## Singly Linked List

**SLL is data stcuture which has node consitance of data and refference to next node and last node refference will point to null.**

#### Basic operations on SLL

- Create the SLL

```JS
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head= new Node("Data of for frist node");
```

- Print the Linked List

```JS
class LinkedList {
  constructor() {
    this.head = null;
  }

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
```

- Insert At head

```JS
insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
```

- Insert At End/tail

```JS
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
```

- Insert at position

```JS
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
```

- delete node

```JS
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
```

- Search in array

```JS
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
```

## Doubly Linked List

- 
