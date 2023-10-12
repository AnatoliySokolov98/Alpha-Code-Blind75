"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kthSmallest = void 0;
function kthSmallest(root, k) {
    let res = 0;
    const traverse = (node) => {
        if (!node || k == 0)
            return;
        traverse(node.left);
        if (k == 0)
            return;
        res = node.val;
        k--;
        traverse(node.right);
    };
    traverse(root);
    return res;
}
exports.kthSmallest = kthSmallest;
;
