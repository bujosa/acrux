const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const subs = publicKey.slice(1);

    const hash = keccak256(subs);

    return hash.slice(-20);
}

module.exports = getAddress;