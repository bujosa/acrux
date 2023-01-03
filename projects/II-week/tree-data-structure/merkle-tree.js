class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    if (this.leaves.length == 1) {
      return this.leaves[0];
    }

    while (this.leaves.length > 1) {
      const newLeaves = [];

      for (let i = 0; i < this.leaves.length; i += 2) {
        const left = this.leaves[i];
        const right = this.leaves[i + 1];

        if (right) {
          newLeaves.push(this.concat(left, right));
        } else {
          newLeaves.push(left);
        }
      }

      this.leaves = newLeaves;
    }

    return this.leaves[0];
  }
}

module.exports = MerkleTree;
