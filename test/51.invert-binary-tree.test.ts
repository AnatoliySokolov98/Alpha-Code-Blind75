import invertTree from '../blind75/51.invert-binary-tree';
import { TreeNode } from './data-structures/tree-node';

describe('invertTree', () => {
  it('should invert a simple tree with two nodes', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    const invertedRoot = invertTree(root) as TreeNode;

    expect(invertedRoot.val).toBe(1);
    expect(invertedRoot.left!.val).toBe(3);
    expect(invertedRoot.right!.val).toBe(2);
  });

  it('should handle an empty tree', () => {
    const root: TreeNode | null = null;
    const invertedRoot = invertTree(root);
    expect(invertedRoot).toBe(null);
  });

  it('should invert a larger tree', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const invertedRoot = invertTree(root) as TreeNode;

    expect(invertedRoot.val).toBe(4);
    expect(invertedRoot.left!.val).toBe(7);
    expect(invertedRoot.right!.val).toBe(2);
    expect(invertedRoot.left!.left!.val).toBe(9);
    expect(invertedRoot.left!.right!.val).toBe(6);
    expect(invertedRoot.right!.left!.val).toBe(3);
    expect(invertedRoot.right!.right!.val).toBe(1);
  });
});
