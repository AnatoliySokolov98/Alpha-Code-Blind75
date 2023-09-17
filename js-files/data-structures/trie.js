"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
class Trie {
    word;
    children;
    constructor() {
        this.word = false;
        this.children = {};
    }
}
exports.Trie = Trie;
