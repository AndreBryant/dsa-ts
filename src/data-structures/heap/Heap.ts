export class Heap {
  private mode: 'min' | 'max';
  private count: number;
  private heap: number[];

  constructor(mode: 'min' | 'max' = 'min') {
    this.mode = mode;
    this.count = 0;
    this.heap = [];
  }

  public add(value: number) {
    this.heap[this.count++] = value;

    this.heapify();
  }

  public delete(value: number) {}

  public contains(value: number) {
    for (let i = 0; i < this.count; i++) {
      if (this.heap[i] === value) return true;
    }

    return false;
  }

  public betterContains(value: number) {}

  private heapify() {
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

  private swap(a: number, b: number) {
    let temp = a;
    a = b;
    b = temp;
  }
}
