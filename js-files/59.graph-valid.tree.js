"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validTree = void 0;
const union_find_1 = require("./data-structures/union-find");
function validTree(n, edges) {
    if (n - 1 !== edges.length)
        return false;
    const uf = new union_find_1.UnionFind(n);
    for (let i = 0; i < edges.length; i++) {
        if (uf.union(edges[i][0], edges[i][1]) === false) {
            return false;
        }
    }
    return true;
}
exports.validTree = validTree;
;
