const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // First step, you'll need to take the first byte off the public key. 
    // The first byte indicates the format of the key, whether it is in the compressed format or not. 
    // The publicKey will be a Uint8Array so you can use the slice method to slice off the first byte.

    const publicKey = publicKey.slice(1);
    const hash = keccak256(publicKey);
    const address = hash.slice(-20);
    return address;
}

module.exports = getAddress;