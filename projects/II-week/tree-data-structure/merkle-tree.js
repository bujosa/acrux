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

  getProof(index, layer = this.leaves, proof = []) {
    if (layer.length === 1) return proof;
    const newLayer = [];
    for (let i = 0; i < layer.length; i += 2) {
      let left = layer[i];
      let right = layer[i + 1];
      if (!right) {
        newLayer.push(left);
      } else {
        newLayer.push(this.concat(left, right));

        if (i === index || i === index - 1) {
          let isLeft = !(index % 2);
          proof.push({
            data: isLeft ? right : left,
            left: !isLeft,
          });
        }
      }
    }
    return this.getProof(Math.floor(index / 2), newLayer, proof);
  }
}

module.exports = MerkleTree;
