import { TreeNode } from "./data-structures/tree-node";

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const compare = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
      if(!node1 || !node2) {
          return node1 === node2;
      }
      return node1.val === node2.val && compare(node1.left, node2.left) && compare(node1.right, node2.right);
  }

const dfs = (node: TreeNode | null): boolean => {
      if(!node)
          return false;
      return compare(node, subRoot) || dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};
