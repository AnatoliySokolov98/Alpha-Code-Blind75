import kthSmallest from '../blind75/52.kth-smallest-element-in-bst';
import { TreeNode } from './data-structures/tree-node';

describe('kthSmallest', () => {
  it('should find the kth smallest element in a simple tree', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.left.right = new TreeNode(2);

    expect(kthSmallest(root, 1)).toBe(1);
    expect(kthSmallest(root, 2)).toBe(2);
    expect(kthSmallest(root, 3)).toBe(3);
    expect(kthSmallest(root, 4)).toBe(4);
  });

  it('should handle a tree with only one node', () => {
    const root = new TreeNode(1);

    expect(kthSmallest(root, 1)).toBe(1);
  });

  it('should handle a large tree', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(8);

    expect(kthSmallest(root, 3)).toBe(4);
    expect(kthSmallest(root, 6)).toBe(7);
  });
});
