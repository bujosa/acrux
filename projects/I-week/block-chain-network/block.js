const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.data = data;
        this.previousHash = null;
        this.hash = this.toHash();
    }

    toHash() {
        return SHA256(this.data + this.previousHash);
    }
}

module.exports = Block;
