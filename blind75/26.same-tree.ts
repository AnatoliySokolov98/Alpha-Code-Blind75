import { TreeNode } from "./data-structures/tree-node";
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return p ? q !== null && p.val === q.val &&  isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : !q;
};