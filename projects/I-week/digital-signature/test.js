const hashMessage = require('./hash-message');
const signMessage = require('./sign-message');
const recover = require('./recovery-key');
const { assert } = require('chai');
const { toHex } = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");
const PRIVATE_KEY = require('./constants').PRIVATE_KEY;

const helloWorldHex = '47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad';

describe('Hash Message', () => {
    it('should return the keccak256 hash of hello world', () => {
        const messageHash = hashMessage('hello world');

        assert.equal(toHex(messageHash), helloWorldHex);
    });
});

describe('Sign Message', () => {
    it('should return both a signature and a recovery bit', async () => {
        const response = await signMessage('hello world');

        const errMessage = "expected signMessage to return both a signature and recovery bit!";
        assert(response.length, errMessage);
        assert(response.length === 2, errMessage);

        const [signature, recoveryBit] = response;
        assert(signature.length, "expected signature to be a Uint8Array");
        assert(typeof recoveryBit === "number", "expected the recovery bit to be a number");
    });

    it('should have been signed by the same private key', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');

        const messageHash = hashMessage('hello world');
        const recovered = secp.recoverPublicKey(messageHash, sig, recoveryBit);

        const publicKey = secp.getPublicKey(PRIVATE_KEY);
        assert.equal(toHex(recovered), toHex(publicKey));
    });
});

describe('Recover Key', () => {
    it('should recover the public key from a signed message', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');

        const publicKey = secp.getPublicKey(PRIVATE_KEY);

        const recovered = await recover('hello world', sig, recoveryBit);

        assert.equal(toHex(recovered), toHex(publicKey));
    });
});