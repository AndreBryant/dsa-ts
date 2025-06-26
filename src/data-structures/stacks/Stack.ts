// Who am i kidding lmao

export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(item: T) {
    this.items.push(item);
  }

  public pop() {
    return this.items.pop();
  }

  public size() {
    return this.items.length;
  }
}
