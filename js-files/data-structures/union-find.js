"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionFind = void 0;
class UnionFind {
    roots;
    ranks;
    constructor(n) {
        this.roots = [];
        this.ranks = [];
        for (let i = 0; i < n; i++) {
            this.roots.push(i);
            this.ranks.push(1);
        }
    }
    find(n) {
        if (this.roots[n] === n) {
            return n;
        }
        else {
            this.roots[n] = this.find(this.roots[n]);
        }
        return this.roots[n];
    }
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY)
            return false;
        if (this.ranks[rootX] > this.ranks[rootY]) {
            this.roots[rootY] = rootX;
        }
        else if (this.ranks[rootY] > this.ranks[rootX]) {
            this.roots[rootX] = rootY;
        }
        else {
            this.roots[rootX] = rootY;
            this.ranks[rootY]++;
        }
        return true;
    }
}
exports.UnionFind = UnionFind;
