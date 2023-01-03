const Tree = require('../tree');
const { assert } = require('chai');

describe('tree', () => {
    const tree = new Tree();
    
    it('should have a null root', () => {
        assert.strictEqual(tree.root, null);
    });
});