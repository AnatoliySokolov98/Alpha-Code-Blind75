import buildTree from '../blind75/29.construct-binary-tree-from-preorder-and-inorder-traversal';
import { TreeNode } from './data-structures/tree-node';

describe('buildTree', () => {
  it('should construct a binary tree from preorder and inorder traversals', () => {
    const preorder1 = [3, 9, 20, 15, 7];
    const inorder1 = [9, 3, 15, 20, 7];
    const expectedTree1 = new TreeNode(3);
    expectedTree1.left = new TreeNode(9);
    expectedTree1.right = new TreeNode(20);
    expectedTree1.right.left = new TreeNode(15);
    expectedTree1.right.right = new TreeNode(7);

    expect(buildTree(preorder1, inorder1)).toEqual(expectedTree1);

    const preorder2 = [1, 2, 3];
    const inorder2 = [2, 1, 3];
    const expectedTree2 = new TreeNode(1);
    expectedTree2.left = new TreeNode(2);
    expectedTree2.right = new TreeNode(3);

    expect(buildTree(preorder2, inorder2)).toEqual(expectedTree2);
  });

  it('should handle empty input', () => {
    expect(buildTree([], [])).toBeNull();
  });
});
