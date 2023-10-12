"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowestCommonAncestor = void 0;
function lowestCommonAncestor(root, p, q) {
    while (p && q && root) {
        if (p.val < root.val && q.val < root.val)
            root = root.left;
        else if (p.val > root.val && q.val > root.val)
            root = root.right;
        else
            return root;
    }
    return null;
}
exports.lowestCommonAncestor = lowestCommonAncestor;
;
