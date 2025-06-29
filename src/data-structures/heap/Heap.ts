export class Heap {
  private mode: 'min' | 'max';
  private count: number;
  private heap: number[];

  constructor(mode: 'min' | 'max' = 'min') {
    this.mode = mode;
    this.count = 0;
    this.heap = [];
  }

  public add(value: number): void {
    this.heap[this.count++] = value;

    this.heapify();
  }

  // TODO: heap delete
  public delete(value: number): boolean {
    let index = this.heap.indexOf(value);

    if (index < 0) {
      return false;
    }

    this.count = this.count - 1;
    this.heap[index] = this.heap[this.count];

    let left = 2 * index + 1;
    let right = 2 * index + 2;

    while (left < this.count && this.heap[index] > this.heap[right]) {
      if (this.heap[left] < this.heap[right]) {
        this.swap(this.heap[left], this.heap[index]);
        index = left;
      } else {
        this.swap(this.heap[right], this.heap[index]);
        index = right;
      }
    }
    return true;
  }

  public contains(value: number): boolean {
    for (let i = 0; i < this.count; i++) {
      if (this.heap[i] === value) return true;
    }

    return false;
  }

  public betterContains(value: number): boolean {
    let nodes = 1;
    let start = 0;

    while (start < this.count) {
      start = nodes - 1;
      let end = nodes + start;
      let count = 0;

      while (start < this.count && start < end) {
        if (this.heap[start] === value) {
          return true;
        } else if (
          value > this.heap[this.parentIndex(start)] &&
          value < this.heap[start]
        ) {
          count = count + 1;
        }

        start = start + 1;
      }

      if (count === nodes) {
        return false;
      }
      nodes = nodes * 2;
    }

    return false;
  }

  private parentIndex(childIndex: number) {
    return (childIndex - 1) / 2;
  }

  private leftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  private rightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  private heapify(): void {
    let i = this.count - 1;
    if (this.mode === 'min') {
      while (i > 0 && this.heap[i] < this.heap[(i - 1) / 2]) {
        this.swap(this.heap[i], this.heap[(i - 1) / 2]);
        i = (i - 1) / 2;
      }
    } else if (this.mode === 'max') {
      while (i > 0 && this.heap[i] > this.heap[(i - 1) / 2]) {
        this.swap(this.heap[i], this.heap[(i - 1) / 2]);
        i = (i - 1) / 2;
      }
    }
  }

  private swap(a: number, b: number): void {
    let temp = a;
    a = b;
    b = temp;
  }
}
