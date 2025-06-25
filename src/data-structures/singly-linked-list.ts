class SinglyNode {
  public value: number | null;
  public next: SinglyNode | null;
  constructor(value: number | null = null, next: SinglyNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class SinglyLinkedList {
  private head: SinglyNode | null;
  private tail: SinglyNode | null;

  constructor(public value: number | null = null) {
    this.head = new SinglyNode(value);
    this.tail = this.head;
  }

  //   void: O(n)
  public insert(value: number) {
    const n = new SinglyNode(value);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  }

  //   boolean: O(n)
  public contains(value: number) {
    let n = this.head;

    while (n !== null && n.value !== value) {
      n = n.next;
    }

    if (n === null) return false;

    return true;
  }

  //   void: returns true if success otherwise, a fail
  public remove(value: number) {
    /*
        Cases to consider
        1 empty list
        2 if linked list has only one node and is the one to be removed
        3 removing the head node
        4 removing the tail node
        5 the node to be removed is somewhere in the middle of the head and tail
        6 the node to be removed is not in the linked list
    */

    // Case 1
    if (this.head === null) return false;

    let n = this.head;

    // Case 2 and 3
    if (n.value === value) {
      if (this.head == this.tail) {
        // If list contains only one node
        this.head = null;
        this.tail = null;
      } else {
        // if node to be removed is in the head
        this.head = this.head.next;
      }
      return true;
    }

    // iterate over the list to find a matching value
    while (n.next !== null && n.next.value !== value) {
      n = n.next;
    }

    if (n.next !== null) {
      // remove the tail
      if (n.next === this.tail) this.tail = n;
      // case 5
      n.next = n.next.next;
      return true;
    }
    // case 6
    return false;
  }

  //   void
  public traverse() {
    console.log('Start of Traversal');

    let n = this.head;

    process.stdout.write('Values: ');
    while (n !== null) {
      process.stdout.write(n.value.toString() + ' -> ');
      n = n.next;
    }

    console.log('null\nEnd of traversal');
  }

  public reverseTraversal() {
    console.log('Start of Reverse Traversal');

    process.stdout.write('Values: ');
    if (this.tail !== null) {
      let curr = this.tail;

      while (curr !== this.head) {
        let prev = this.head;

        while (prev.next !== curr) {
          prev = prev.next;
        }

        process.stdout.write(curr.value.toString() + ' <- ');
        curr = prev;
      }

      process.stdout.write(curr.value.toString());
    }

    console.log('\nEnd of reverse traversal');
  }
}
