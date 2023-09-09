import { TreeNode } from "./data-structures/tree-node";

export function maxDepth(root: TreeNode | null): number {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
};
