const ganache = require('ganache-cli');

const ganacheProvider = ganache.provider({
  accounts: [
    {
      secretKey: 'YOUR_SECRET_KEY_GOES_HERE',
      balance: 1000000000000000000000,
    },
  ],
});

const PRIVATE_KEY = 'YOUR_PRIVATE_KEY_GOES_HERE';

module.exports = {
  ganacheProvider,
  PRIVATE_KEY,
};
