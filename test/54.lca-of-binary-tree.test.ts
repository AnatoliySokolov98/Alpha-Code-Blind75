import lowestCommonAncestor from '../blind75/54.lca-of-binary-tree';
import { TreeNode } from './data-structures/tree-node';

describe('lowestCommonAncestor', () => {
  it('should find the lowest common ancestor in a simple binary tree', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const p = new TreeNode(5);
    const q = new TreeNode(1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result!.val).toBe(3);
  });

  it('should handle a case where one node is the ancestor of the other', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);

    const p = new TreeNode(2);
    const q = new TreeNode(1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result!.val).toBe(2);
  });

  it('should return null when p or q is not in the tree', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);

    const p = new TreeNode(2);
    const q = new TreeNode(3);

    const result = lowestCommonAncestor(root, p, q);

    expect(result).toBe(null);
  });
});
