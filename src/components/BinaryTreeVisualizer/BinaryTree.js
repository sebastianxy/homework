import TreeNode from "./TreeNode";

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  preorder(node = this.root, out = []) {
    if (!node) return out;
    out.push(node.value);
    this.preorder(node.left, out);
    this.preorder(node.right, out);
    return out;
  }

  inorder(node = this.root, out = []) {
    if (!node) return out;
    this.inorder(node.left, out);
    out.push(node.value);
    this.inorder(node.right, out);
    return out;
  }

  postorder(node = this.root, out = []) {
    if (!node) return out;
    this.postorder(node.left, out);
    this.postorder(node.right, out);
    out.push(node.value);
    return out;
  }

  toD3(node = this.root) {
    if (!node) return null;
    const obj = { name: String(node.value) };
    const children = [];
    if (node.left) children.push(this.toD3(node.left));
    if (node.right) children.push(this.toD3(node.right));
    if (children.length) obj.children = children;
    return obj;
  }
}
