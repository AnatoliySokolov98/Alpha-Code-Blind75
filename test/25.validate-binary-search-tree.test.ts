import isValidBST from '../blind75/25.validate-binary-search-tree';
import { TreeNode } from './data-structures/tree-node';

describe('isValidBST function', () => {
  it('should return true for a valid binary search tree', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);

    expect(isValidBST(root)).toBe(true);
  });

  it('should return true for an empty tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  it('should return true for a single node tree', () => {
    const root = new TreeNode(42);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for an invalid binary search tree', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(6);

    expect(isValidBST(root)).toBe(false);
  });

  it('should handle a tree with negative values', () => {
    const root = new TreeNode(-5);
    root.left = new TreeNode(-10);
    root.right = new TreeNode(0);

    expect(isValidBST(root)).toBe(true);
  });
});
