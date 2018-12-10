import isFunction from 'lodash.isfunction';

import Node from './node';

const defaultComparator = a => b => a === b;

class SinglyLinkedList {
  constructor() {
    this.head = undefined;
    this.listSize = 0;
  }

  get length() {
    return this.listSize;
  }

  delete(value) {
    const comparator = isFunction(value) ? value : defaultComparator(value);
    let current = this.head;
    if (!current) {
      return false;
    }
    if (comparator(current.value)) {
      this.head = this.head.next;
      this.listSize -= 1;
      return true;
    }
    while (current) {
      const { next } = current;
      if (next) {
        if (comparator(next.value)) {
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


  insertAfter(value, after) {
    const comparator = isFunction(after) ? after : defaultComparator(after);
    const node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current) {
        const { next } = current;
        if (!next) {
          current.next = node;
          break;
        } else if (comparator(current.value)) {
          node.next = next;
          current.next = node;
          break;
        }
        current = next;
      }
    }
  }


  insertBefore(value, before) {
    const comparator = isFunction(before) ? before : defaultComparator(before);
    const node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current) {
        const { next } = current;
        if (!next) {
          current.next = node;
          break;
        } else if (comparator(next.value)) {
          node.next = next;
          current.next = node;
          break;
        }
        current = next;
      }
    }
  }

  search(value) {
    const comparator = isFunction(value) ? value : defaultComparator(value);
    let current = this.head;
    while (current) {
      if (comparator(current.value)) {
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
