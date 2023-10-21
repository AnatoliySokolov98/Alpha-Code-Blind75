"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countComponents = void 0;
const union_find_1 = require("./data-structures/union-find");
function countComponents(n, edges) {
    const uf = new union_find_1.UnionFind(n);
    edges.forEach(el => {
        const [start, end] = el;
        if (uf.union(start, end)) {
            n--;
        }
    });
    return n;
}
exports.countComponents = countComponents;
;
