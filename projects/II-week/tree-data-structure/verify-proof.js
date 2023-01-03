function verifyProof(proof, node, root, concat) {
  for (let i = 0; i < proof.length; i++) {
    const buffers = proof[i].left
      ? [proof[i].data, node]
      : [node, proof[i].data];
    node = concat(...buffers);
  }
  return node === root;
}

module.exports = verifyProof;
