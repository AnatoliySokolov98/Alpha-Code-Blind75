import { TreeNode } from "./data-structures/tree-node";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const locations: Record<number, number> = {};
  let pre = 0;
  for(let i = 0; i < inorder.length; i++) {
      locations[inorder[i]] = i;
  }

  const traverse = (left: number, right: number) : TreeNode | null => {
      if(left > right) return null;
      const root = new TreeNode(preorder[pre++]);
      root.left = traverse(left, locations[root.val] - 1);
      root.right = traverse(locations[root.val] + 1, right);
      return root;
  }
  return traverse(0, inorder.length - 1);
};