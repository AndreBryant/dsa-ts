class MyNode {
  constructor(
    public value: number | null = null,
    public next: MyNode | null = null
  ) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: MyNode | null;
  private tail: MyNode | null;

  constructor(public value: number | null = null) {
    this.head = new MyNode(value);
    this.tail = this.head;
  }

  public insert(value: number) {
    const n = new MyNode(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  }
}
