class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  printForward() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  printBackward() {
    let current = this.tail;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    return result;
  }
}

export { DoubleLinkedList };
