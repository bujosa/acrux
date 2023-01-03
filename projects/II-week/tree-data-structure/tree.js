class Tree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    if (this.root === null) {
      this.root = data;
      return;
    }

    let current = this.root;
    while (current) {
      if (data.data < current.data) {
        if (current.left === null) {
          current.left = data;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = data;
          return;
        }
        current = current.right;
      }
    }
  }
}

module.exports = {
  Tree,
};
