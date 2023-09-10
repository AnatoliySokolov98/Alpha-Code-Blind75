"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameTree = void 0;
function isSameTree(p, q) {
    return p ? q !== null && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : !q;
}
exports.isSameTree = isSameTree;
;
