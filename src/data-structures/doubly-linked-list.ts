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
