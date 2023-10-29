import { TreeNode } from "./data-structures/tree-node";

export function kthSmallest(root: TreeNode | null, k: number): number {
  let res = 0;
  const traverse = (node: TreeNode | null):void => {
      if(!node || k == 0)
          return
      traverse(node.left)
      if(k == 0)
          return
      res = node.val
      k--;
      traverse(node.right);
  }
  traverse(root);
  return res;
};