import lowestCommonAncestor from '../blind75/53.lca-of-bst';
import { TreeNode } from './data-structures/tree-node';

describe('lowestCommonAncestor', () => {
  it('should find the lowest common ancestor in a simple binary search tree', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(2);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    const p = new TreeNode(2);
    const q = new TreeNode(8);

    const result = lowestCommonAncestor(root, p, q);

    expect(result!.val).toBe(6);
  });

  it('should handle a case where p and q are the same node', () => {
    const root = new TreeNode(1);

    const p = new TreeNode(1);
    const q = new TreeNode(1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result!.val).toBe(1);
  });

  it('should handle a case where one node is the ancestor of the other', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);

    const p = new TreeNode(2);
    const q = new TreeNode(1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result!.val).toBe(2);
  });
});
