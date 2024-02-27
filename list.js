const Node = require('./node');

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(key, value) {
      const newNode = new Node(key, value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    find(key) {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    delete(key) {
      if (!this.head) {
        return null;
      }
      if (this.head.key === key) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let prev = null;
      while (current && current.key !== key) {
        prev = current;
        current = current.next;
      }
      if (!current) {
        return null;
      }
      prev.next = current.next;
    }
  }

  module.exports = LinkedList;