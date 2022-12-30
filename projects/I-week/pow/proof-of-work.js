const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

function mine() {
  let nonce = 0;

  while (true) {
    const blockHeight = blocks.length;
    const blockHash = SHA256(JSON.stringify({ nonce: nonce, id: blockHeight }));

    if (BigInt(`0x${blockHash}`) <= TARGET_DIFFICULTY) {
      const block = {
        transactions: mempool.splice(0, MAX_TRANSACTIONS),
        hash: blockHash,
        nonce,
        id: blockHeight,
      };
      blocks.push(block);
      break;
    }
    nonce++;
  }
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
