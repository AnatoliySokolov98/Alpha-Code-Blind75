"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertTree = void 0;
function invertTree(root) {
    if (!root)
        return null;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
exports.invertTree = invertTree;
;
