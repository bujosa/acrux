const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

const wallet = new Wallet(PRIVATE_KEY);

async function sendEther({ value, to }) {
  const rawTx = await wallet.signTransaction({
    value,
    to,
    gasLimit: 0x5208,
    gasPrice: 0x3b9aca00,
    nonce: await provider.getTransactionCount(wallet.address),
  });

  const tx = await provider.sendTransaction(rawTx);

  return tx;
}

module.exports = sendEther;
