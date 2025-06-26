// Who am i kidding lmao

export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T {
    return this.items.pop();
  }

  public size(): number {
    return this.items.length;
  }
}
