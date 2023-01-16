const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

function findMyBalance(privateKey) {
  const wallet = new Wallet(privateKey);
  return provider.getBalance(wallet.address);
}

module.exports = findMyBalance;
