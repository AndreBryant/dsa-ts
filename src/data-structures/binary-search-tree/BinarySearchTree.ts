class BSTNode {
  value: number;
  left: BSTNode;
  right: BSTNode;

  constructor(
    value: number | null = null,
    left: BSTNode | null = null,
    right: BSTNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  private root: BSTNode | null;
  constructor(value: number | null = null) {
    this.root = new BSTNode(value);
  }

  public insert(value: number) {
    if (this.root === null) this.root = new BSTNode(value);
    else this.insertNode(this.root, value);
  }

  private insertNode(current: BSTNode, value: number) {
    if (value < current.value) {
      if (current.left === null) current.left = new BSTNode(value);
      else this.insertNode(current.left, value);
    } else {
      if (current.right === null) current.right = new BSTNode(value);
      else this.insertNode(current.right, value);
    }
  }

  public contains(root: BSTNode = this.root, value: number) {
    if (this.root === null) return false;

    if (this.root.value === value) return true;
    else if (value < this.root.value) this.contains(this.root.left, value);
    else this.contains(this.root.right, value);
  }
}
