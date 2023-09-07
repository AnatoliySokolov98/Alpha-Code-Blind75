"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBST = void 0;
function isValidBST(node, left = -Infinity, right = Infinity) {
    return node ? node.val > left && node.val < right && isValidBST(node.left, left, node.val) && isValidBST(node.right, node.val, right) : true;
}
exports.isValidBST = isValidBST;
;
