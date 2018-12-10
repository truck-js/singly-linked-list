import Node from './node';

const defaultComparator = (a, b) => a === b;

class SinglyLinkedList {
  constructor() {
    this.head = undefined;
    this.listSize = 0;
  }

  get length() {
    return this.listSize;
  }

  delete(value, comparator = defaultComparator) {
    let current = this.head;
    if (!current) {
      return false;
    }
    if (comparator(current.value, value)) {
      this.head = this.head.next;
      this.listSize -= 1;
      return true;
    }
    while (current) {
      const { next } = current;
      if (next) {
        if (comparator(next.value, value)) {
          current.next = next.next;
          this.listSize -= 1;
          return true;
        }
      }
      current = next;
    }
    return false;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    this.listSize += 1;
  }

  search(value, comparator = defaultComparator) {
    let current = this.head;
    while (current) {
      if (comparator(current.value, value)) {
        return current;
      }
      current = current.next;
    }
    return undefined;
  }

  toArray() {
    const returnArray = [];
    let current = this.head;
    while (current) {
      returnArray.push(current.value);
      current = current.next;
    }
    return returnArray;
  }
}

export default SinglyLinkedList;
