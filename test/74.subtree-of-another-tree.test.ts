import isSubtree from '../blind75/74.subtree-of-another-tree';
import { TreeNode } from './data-structures/tree-node';

describe('isSubtree', () => {
  it('returns true when subRoot is a subtree of root', () => {
    // Create the main tree
    const root = new TreeNode(3);
    root.left = new TreeNode(4);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);

    // Create the subtree
    const subRoot = new TreeNode(4);
    subRoot.left = new TreeNode(1);
    subRoot.right = new TreeNode(2);

    const result = isSubtree(root, subRoot);

    expect(result).toBe(true);
  });

  it('returns false when subRoot is not a subtree of root', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(4);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);

    const subRoot = new TreeNode(4);
    subRoot.left = new TreeNode(1);

    const result = isSubtree(root, subRoot);

    expect(result).toBe(false);
  });

  it('handles the main tree being null correctly', () => {
    const root = null;

    const subRoot = new TreeNode(4);

    const result = isSubtree(root, subRoot);

    expect(result).toBe(false);
  });
});
