"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelOrder = void 0;
function levelOrder(root) {
    const res = [];
    const traverse = (node, level) => {
        if (!node)
            return;
        if (level === res.length)
            res.push([]);
        res[level].push(node.val);
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    };
    traverse(root, 0);
    return res;
}
exports.levelOrder = levelOrder;
;
