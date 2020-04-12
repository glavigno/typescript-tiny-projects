import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bound');
    }
    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) return node;

      ++counter;
      node = node.next;
    }

    throw new Error('Index out of bound');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
      if (node) console.log('|');
    }
  }

  get length(): number {
    let tail;
    let counter = 0;

    if (!this.head) return 0;

    tail = this.head;
    while (tail && tail.next) {
      tail = tail.next;
      ++counter;
    }

    return counter + 1;
  }
}
