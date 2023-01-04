const { assert } = require('chai');
const Trie = require('../trie');

describe('Trie', () => {
  describe('with a single word', () => {
    let trie;
    beforeEach(() => {
      trie = new Trie();
      trie.insert('hey');
    });

    it('should properly detect words that are contained', () => {
      assert(trie.contains('hey'), 'Expected the trie to contain `hey`!');
    });

    it('should properly detect words that are not contained', () => {
      assert(
        !trie.contains('hello'),
        'Expected the trie to not contain `hello`!'
      );
      assert(!trie.contains('he'), 'Expected the trie to not contain `he`!');
      assert(!trie.contains('hi'), 'Expected the trie to not contain `hi`!');
      assert(
        !trie.contains('heya'),
        'Expected the trie to not contain `heya`!'
      );
    });
  });

  describe('with three words', () => {
    let trie;
    let words = ['helipad', 'hello', 'hermit'];
    beforeEach(() => {
      trie = new Trie();
      words.forEach((word) => trie.insert(word));
    });

    words.forEach((word) => {
      describe(`for ${word}`, () => {
        it('should connect to the final letter', () => {
          const finalNode = word
            .split('')
            .reduce((node, letter) => node.children[letter], trie.root);
          assert(finalNode);
          assert.equal(
            finalNode.isWord,
            true,
            'expected the final node `isWord` to be set to true'
          );
        });
      });
    });
  });
});
