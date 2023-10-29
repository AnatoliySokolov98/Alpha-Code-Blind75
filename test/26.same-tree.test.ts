import isSameTree from '../blind75/26.same-tree';
import { TreeNode } from './data-structures/tree-node';

describe('isSameTree function', () => {
  it('should return true for two identical trees', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(3);

    expect(isSameTree(tree1, tree2)).toBe(true);
  });

  it('should return true for two empty trees', () => {
    expect(isSameTree(null, null)).toBe(true);
  });

  it('should return false for one empty tree and one non-empty tree', () => {
    const tree = new TreeNode(1);

    expect(isSameTree(null, tree)).toBe(false);
    expect(isSameTree(tree, null)).toBe(false);
  });

  it('should return false for two trees with different structures', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);

    const tree2 = new TreeNode(1);
    tree2.right = new TreeNode(2);

    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  it('should return false for two trees with different values', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);

    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(3);

    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  it('should handle edge cases with duplicate values', () => {
    const tree1 = new TreeNode(2);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(2);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(3);

    expect(isSameTree(tree1, tree2)).toBe(true);
  });
});
