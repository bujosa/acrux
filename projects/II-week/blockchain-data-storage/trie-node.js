class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.isWord = false;
    this.end = false;
  }
}

module.exports = TrieNode;
