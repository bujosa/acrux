const TrieNode = require('./trie-node');

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode(letter);
      }
      currentNode = currentNode.children[letter];
    }
    currentNode.isWord = true;
  }
}

module.exports = Trie;
