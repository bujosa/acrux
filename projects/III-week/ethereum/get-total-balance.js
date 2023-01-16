const provider = require('./new-provider');

async function getTotalBalance(addresses) {
  let totalBalance = 0;

  for (const address of addresses) {
    const response = await provider.send({
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });

    totalBalance += parseInt(response.result, 16);
  }

  return totalBalance;
}

module.exports = getTotalBalance;
