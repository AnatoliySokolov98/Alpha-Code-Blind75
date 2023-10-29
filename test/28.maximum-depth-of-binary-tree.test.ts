import maxDepth from '../blind75/28.maximum-depth-of-binary-tree';
import { TreeNode } from './data-structures/tree-node';

describe('maxDepth function', () => {
  it('should return 0 for an empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should return 1 for a tree with a single node', () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  it('should calculate the maximum depth for a balanced binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    expect(maxDepth(root)).toBe(3);
  });

  it('should calculate the maximum depth for an unbalanced binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);

    expect(maxDepth(root)).toBe(4);
  });

  it('should handle edge cases with duplicate values', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(maxDepth(root)).toBe(3);
  });
});
