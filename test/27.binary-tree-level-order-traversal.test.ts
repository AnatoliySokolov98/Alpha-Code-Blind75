import levelOrder from '../blind75/27.binary-tree-level-order-traversal';
import { TreeNode } from './data-structures/tree-node';

describe('levelOrder function', () => {
  it('should return an empty array for an empty tree', () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it('should perform level-order traversal for a tree with a single node', () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it('should perform level-order traversal for a balanced binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  it('should perform level-order traversal for an unbalanced binary tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);

    expect(levelOrder(root)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('should handle edge cases with duplicate values', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right.right = new TreeNode(3);

    expect(levelOrder(root)).toEqual([[1], [2, 2], [3, 3]]);
  });
});
