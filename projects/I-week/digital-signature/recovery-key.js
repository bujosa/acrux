const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hash-message");

async function recoverKey(message, signature, recoveryBit) {
    const messageHash = hashMessage(message);
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

module.exports = recoverKey;