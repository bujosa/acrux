class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    if (this.leaves.length === 1) {
      return this.leaves[0];
    }

    if (this.leaves.length === 2) {
      return this.concat(this.leaves[0], this.leaves[1]);
    }

    if (this.leaves.length > 2) {
      return this.concat(
        this.getLeftSubtree().getRoot(),
        this.getRightSubtree().getRoot()
      );
    }
  }

  getLeftSubtree() {
    return new MerkleTree(
      this.leaves.slice(0, Math.ceil(this.leaves.length / 2)),
      this.concat
    );
  }

  getRightSubtree() {
    return new MerkleTree(
      this.leaves.slice(Math.ceil(this.leaves.length / 2)),
      this.concat
    );
  }
}

module.exports = MerkleTree;
