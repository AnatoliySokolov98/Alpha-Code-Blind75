"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxPathSum = void 0;
function maxPathSum(root) {
    let res = root.val;
    const traverse = (node) => {
        if (!node)
            return 0;
        const left = traverse(node.left);
        const right = traverse(node.right);
        res = Math.max(res, node.val + left + right);
        return Math.max(0, node.val + (Math.max(left, right, 0)));
    };
    traverse(root);
    return res;
}
exports.maxPathSum = maxPathSum;
;
