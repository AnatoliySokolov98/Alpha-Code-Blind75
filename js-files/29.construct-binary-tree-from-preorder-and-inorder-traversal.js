"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTree = void 0;
const tree_node_1 = require("./data-structures/tree-node");
function buildTree(preorder, inorder) {
    const locations = {};
    let pre = 0;
    for (let i = 0; i < inorder.length; i++) {
        locations[inorder[i]] = i;
    }
    const traverse = (left, right) => {
        if (left > right)
            return null;
        const root = new tree_node_1.TreeNode(preorder[pre++]);
        root.left = traverse(left, locations[root.val] - 1);
        root.right = traverse(locations[root.val] + 1, right);
        return root;
    };
    return traverse(0, inorder.length - 1);
}
exports.buildTree = buildTree;
;
