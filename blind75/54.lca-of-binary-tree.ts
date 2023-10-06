import { TreeNode } from "./data-structures/tree-node";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let res: TreeNode | null = null;

    const traverse = (node: TreeNode | null): boolean => {
        if(!node) return false;
        const left = traverse(node.left);
        const right = traverse(node.right);
        const curr = node.val === p.val || node.val === q.val;
        if(Number(left) + Number(right) + Number(curr) === 2)
            res = node;
        return left || right || curr;
    }
    traverse(root);
    return res;
};