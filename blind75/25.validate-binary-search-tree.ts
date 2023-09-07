import { TreeNode } from "./data-structures/tree-node";

export function isValidBST(node: TreeNode | null, left = -Infinity, right = Infinity): boolean {

  return node ? node.val > left && node.val < right && isValidBST(node.left, left, node.val) && isValidBST(node.right, node.val, right) : true;

};