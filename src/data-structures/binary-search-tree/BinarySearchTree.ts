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
  private count: number;
  constructor(value: number | null = null) {
    this.root = new BSTNode(value);
    this.count = 0;
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

    this.count += 1;
  }

  public contains(root: BSTNode = this.root, value: number) {
    if (this.root === null) return false;

    if (this.root.value === value) return true;
    else if (value < this.root.value) this.contains(this.root.left, value);
    else this.contains(this.root.right, value);
  }

  public remove(value: number) {
    /***
     * 4 cases to consider
     * 1. the value to remove is a leaf (no left and right children)
     * 2. the valeu to remove has a right subtree but no left subtree
     * 3. * vice versa
     * 4. the value has both left and right subtree (we promote the largest value in the left subtree; but why?)
     */

    const nodeToRemove = this.findNode(value);
    if (nodeToRemove === null) return false;

    const parent = this.findParent(value);
    if (this.count == 1) {
      this.root = null;
    } else if (nodeToRemove.left === null && nodeToRemove.right === null) {
      if (nodeToRemove.value < parent.value) parent.left = null;
      else parent.right = null;
    } else if (nodeToRemove.left === null && nodeToRemove.right !== null) {
      if (nodeToRemove.value < parent.value) parent.left = nodeToRemove.right;
      else parent.right = nodeToRemove.right;
    } else if (nodeToRemove.left !== null && nodeToRemove.right === null) {
      if (nodeToRemove.value < parent.value) parent.left = nodeToRemove.left;
      else parent.right = nodeToRemove.left;
    } else {
      let largestValue = nodeToRemove.left;
      while (largestValue.right !== null) largestValue = largestValue.right;

      this.findParent(largestValue.value).right = null;
      nodeToRemove.value = largestValue.value;
    }
    this.count -= 1;
    return true;
  }

  private findParent(value: number, root: BSTNode | null = this.root) {
    if (value === root.value) return null;

    if (value < root.value) {
      if (root.left === null) return null;
      else if (root.left.value === value) return root;
      else this.findParent(value, root.left);
    } else {
      if (root.right === null) return null;
      else if (root.right.value === value) return root;
      else return this.findParent(value, root.right);
    }
  }

  private findNode(value: number, root: BSTNode | null = this.root) {
    if (root === null) return null;

    if (root.value === value) return root;
    else if (value < root.value) this.findNode(value, root.left);
    else this.findNode(value, root.right);
  }

  public findMin(root: BSTNode | null = this.root) {
    if (root.left === null) return root.value;
    return this.findMin(root.left);
  }

  public findMax(root: BSTNode | null = this.root) {
    if (root.right === null) return root.value;
    return this.findMax(root.right);
  }

  public traverse(
    mode: 'pre' | 'post' | 'in',
    root: BSTNode | null = this.root
  ) {
    console.log('Start of traversal: ' + mode + 'order');

    switch (mode) {
      case 'pre':
        if (root !== null) {
          process.stdout.write(root.value.toString());
          this.traverse(mode, root.left);
          this.traverse(mode, root.right);
        }
        break;

      case 'post': {
        if (root !== null) {
          this.traverse(mode, root.left);
          this.traverse(mode, root.right);
          process.stdout.write(root.value.toString());
        }
        break;
      }

      case 'in': {
        if (root !== null) {
          this.traverse(mode, root.left);
          process.stdout.write(root.value.toString());
          this.traverse(mode, root.right);
        }
        break;
      }
    }

    console.log('\nEnd of traversal: ' + mode + 'order');
  }
}
