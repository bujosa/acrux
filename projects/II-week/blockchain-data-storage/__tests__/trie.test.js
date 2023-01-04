const { assert } = require('chai');
const Trie = require('../trie');
const TrieNode = require('../trie-node');

describe('Trie', () => {
  it('should have a root trie node', () => {
    const trie = new Trie();
    assert(
      trie.root instanceof TrieNode,
      'expected Trie to have a property `root` which is an instance of TrieNode'
    );
  });
});
