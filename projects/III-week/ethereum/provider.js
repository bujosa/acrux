const ganache = require('ganache-core');
const promisfy = require('util').promisify;

const provider = ganache.provider();

provider.send = promisfy(provider.send);

module.exports = provider;
