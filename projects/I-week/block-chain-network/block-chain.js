const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [ 
            new Block('Genesis Block')
        ];
    }
}

module.exports = Blockchain;