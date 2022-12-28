const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(msg) {
    const bytes = utf8ToBytes(msg);
    
    return keccak256(bytes); 
}

module.exports = hashMessage;