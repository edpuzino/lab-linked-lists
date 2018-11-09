'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {     // Big O value is O(n)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, we add to the end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  kFromEnd(k) {      // Big O value is O(n)
    
    let node = new Node(k);
    // this happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, we return the value of the list item k from the end
    let ctr = 0;
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
      ctr++;
    }
    currentNode = this.head;
    for(let i = 0; i < (crt-k); i++) {}

    currentNode= currentNode.next;
    return currentNode.value;    
  }

  prepend(value) {    // Big O value is O(2)

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;      
    }

    // If we have stuff, we add to the beginning
    node.next = this.head;
    this.head = node;
    return this;
  }
/*
  reverse() {}

  remove(offset) {}

  serialize() {}

  deserialize() {}
*/
}

module.exports = LinkedList;