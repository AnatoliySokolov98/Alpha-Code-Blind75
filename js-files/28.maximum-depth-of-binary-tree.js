"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxDepth = void 0;
function maxDepth(root) {
    return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
}
exports.maxDepth = maxDepth;
;
