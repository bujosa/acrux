const hashMessage = require('./hash-message');
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const PRIVATE_KEY = require('./constants').PRIVATE_KEY;

async function signMessage(msg) {
    // should return both a signature and a recovery bit
    const hash_message = hashMessage(msg);

    return secp.sign(toHex(hash_message), PRIVATE_KEY, {
        recovered: true
    }); 
}

module.exports = signMessage;