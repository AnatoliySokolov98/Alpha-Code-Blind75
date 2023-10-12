"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowestCommonAncestor = void 0;
function lowestCommonAncestor(root, p, q) {
    let res = null;
    const traverse = (node) => {
        if (!node)
            return false;
        const left = traverse(node.left);
        const right = traverse(node.right);
        const curr = node.val === p.val || node.val === q.val;
        if (Number(left) + Number(right) + Number(curr) === 2)
            res = node;
        return left || right || curr;
    };
    traverse(root);
    return res;
}
exports.lowestCommonAncestor = lowestCommonAncestor;
;
