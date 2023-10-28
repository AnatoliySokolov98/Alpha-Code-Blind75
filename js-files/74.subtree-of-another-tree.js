"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubtree = void 0;
function isSubtree(root, subRoot) {
    const compare = (node1, node2) => {
        if (!node1 || !node2) {
            return node1 === node2;
        }
        return node1.val === node2.val && compare(node1.left, node2.left) && compare(node1.right, node2.right);
    };
    const dfs = (node) => {
        if (!node)
            return false;
        return compare(node, subRoot) || dfs(node.left) || dfs(node.right);
    };
    return dfs(root);
}
exports.isSubtree = isSubtree;
;
