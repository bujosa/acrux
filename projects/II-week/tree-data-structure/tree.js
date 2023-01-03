class Tree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    if (this.root === null) {
      this.root = data;
      return;
    }
  }
}

module.exports = {
  Tree,
};
