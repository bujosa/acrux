const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [ 
            new Block('Genesis Block')
        ];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.previousHash.toString() !== previousBlock.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
    
}

module.exports = Blockchain;