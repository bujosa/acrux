const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (let i = 0; i < COLORS.length; i++) {
        // Convert the color to bytes
        const colorBytes = utf8ToBytes(COLORS[i]);

        // Hash the color bytes
        const colorHash = toHex(sha256(colorBytes));

        // If the hash matches, return the color
        if (toHex(hash) === colorHash) {
            return COLORS[i];
        }
    }
}

module.exports = findColor;