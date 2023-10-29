import { TreeNode } from "./data-structures/tree-node";

export function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  const traverse = (node: TreeNode | null, level: number): void => {
      if (!node) return;

      if (level === res.length)
          res.push([]);

      res[level].push(node.val);

      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return res;
};