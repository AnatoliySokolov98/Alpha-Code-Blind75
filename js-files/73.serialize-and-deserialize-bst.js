"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = exports.serialize = void 0;
const tree_node_1 = require("./data-structures/tree-node");
function serialize(root) {
    const res = [];
    const traverse = (node) => {
        if (!node) {
            res.push('n');
            return;
        }
        res.push(String(node.val));
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    return res.join(',');
}
exports.serialize = serialize;
;
function deserialize(data) {
    const res = data.split(',');
    let curr = 0;
    const traverse = () => {
        const val = res[curr++];
        if (val == 'n') {
            return null;
        }
        const node = new tree_node_1.TreeNode(Number(val));
        node.left = traverse();
        node.right = traverse();
        return node;
    };
    return traverse();
}
exports.deserialize = deserialize;
;
