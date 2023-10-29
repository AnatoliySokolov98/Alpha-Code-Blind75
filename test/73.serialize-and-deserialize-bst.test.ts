import {
  serialize,
  deserialize,
} from '../blind75/73.serialize-and-deserialize-bst';

import { TreeNode } from './data-structures/tree-node';

describe('serialize and deserialize', () => {
  it('serializes and deserializes a binary tree correctly', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const serialized = serialize(root);

    const deserialized = deserialize(serialized);

    expect(deserialized).toEqual(root);
  });

  it('handles null values correctly', () => {
    const serialized = '1,n,2,n,n';
    const deserialized = deserialize(serialized);

    expect(deserialized).toEqual(new TreeNode(1, null, new TreeNode(2)));
  });

  it('handles an empty tree correctly', () => {
    const serialized = 'n';
    const deserialized = deserialize(serialized);

    expect(deserialized).toBeNull();
  });
});
