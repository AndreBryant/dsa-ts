class DoublyNode {
  public value: number | null;
  public prev: DoublyNode | null;
  public next: DoublyNode | null;

  constructor(
    value: number | null = null,
    prev: DoublyNode | null = null,
    next: DoublyNode | null = null
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  private head: DoublyNode | null;
  private tail: DoublyNode | null;

  constructor(value: number | null = null) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
  }

  public insert(value: number): void {
    const n = new DoublyNode(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      n.prev = this.tail;
      this.tail.next = n;
      this.tail = n;
    }
  }

  public contains(value: number): boolean {
    let n = this.head;

    while (n !== null && n.value !== value) {
      n = n.next;
    }

    if (n === null) return false;

    return true;
  }

  public remove(value: number): boolean {
    if (this.head === null) return false;

    if (value === this.head.value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return true;
    }

    let n = this.head.next;

    while (n !== null && n.value !== value) {
      n = n.next;
    }

    if (n === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return true;
    } else if (n !== null) {
      n.prev.next = n.next;
      n.next.prev = n.prev;
      return true;
    }

    return false;
  }

  public traverse(): void {
    console.log('Start of Traversal');

    let n = this.head;

    process.stdout.write('Values: ');
    while (n !== null) {
      process.stdout.write(n.value.toString() + ' -> ');
      n = n.next;
    }

    console.log('null\nEnd of traversal');
  }

  public reverseTraversal(): void {
    console.log('Start of Reverse Traversal');

    let n = this.tail;

    process.stdout.write('Values: ');
    while (n !== null) {
      process.stdout.write(n.value.toString() + ' -> ');
      n = n.prev;
    }

    console.log('null\nEnd of reverse traversal');
  }
}
