import { TreeNode } from "./data-structures/tree-node";
export function maxPathSum(root: TreeNode): number {
  let res = root.val;
  const traverse = (node: TreeNode | null): number => {
      if (!node)
          return 0;
      const left = traverse(node.left);
      const right = traverse(node.right);
      res = Math.max(res, node.val + left + right);
      return Math.max(0, node.val + (Math.max(left, right, 0)));
  }
  traverse(root);
  return res;
};