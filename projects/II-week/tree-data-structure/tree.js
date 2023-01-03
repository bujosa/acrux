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

  hasNode(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = {
  Tree,
};
