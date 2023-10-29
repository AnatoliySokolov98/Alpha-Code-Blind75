import maxPathSum from '../blind75/31.binary-tree-maximum-path-sum';
import { TreeNode } from './data-structures/tree-node';

describe('maxPathSum', () => {
  it('should handle a single node tree', () => {
    const root = new TreeNode(5);
    expect(maxPathSum(root)).toBe(5);
  });

  it('should handle a tree with negative values', () => {
    const root = new TreeNode(-10);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(maxPathSum(root)).toBe(42);
  });

  it('should handle a tree with positive values', () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(2);
    root.right = new TreeNode(10);
    root.left.left = new TreeNode(20);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(-25);
    root.right.right.left = new TreeNode(3);
    root.right.right.right = new TreeNode(4);

    expect(maxPathSum(root)).toBe(42);
  });

  it('should handle a tree with a single path', () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);

    expect(maxPathSum(root)).toBe(-1);
  });
});
