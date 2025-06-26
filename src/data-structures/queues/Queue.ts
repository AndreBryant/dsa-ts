export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public enqueue(item: T): void {
    this.items.push(item);
  }

  public dequeue(): T {
    return this.items.shift();
  }

  public size(): number {
    return this.items.length;
  }
}
