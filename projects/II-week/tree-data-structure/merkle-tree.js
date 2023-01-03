class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    // TODO: implement this method and return the root of the tree
    // Check the leaves and search for the root
    // If there is only one leaf, return it
    // If there are two leaves, return the concatenation of the two leaves
    // If there are more than two leaves, return the concatenation of the root of the left subtree and the root of the right subtree
    // Hint: use the concat function to concatenate two leaves
    // Hint: use the getLeftSubtree and getRightSubtree methods to get the subtrees
    // Hint: use the getRoot method to get the root of a subtree

    if (this.leaves.length === 1) {
      return this.leaves[0];
    } else if (this.leaves.length === 2) {
      return this.concat(this.leaves[0], this.leaves[1]);
    } else {
      const leftSubtree = this.getLeftSubtree();
      const rightSubtree = this.getRightSubtree();
      return this.concat(leftSubtree.getRoot(), rightSubtree.getRoot());
    }
  }

  getLeftSubtree() {
    return new MerkleTree(
      this.leaves.slice(0, this.leaves.length / 2),
      this.concat
    );
  }

  getRightSubtree() {
    return new MerkleTree(
      this.leaves.slice(this.leaves.length / 2),
      this.concat
    );
  }
}

module.exports = MerkleTree;
