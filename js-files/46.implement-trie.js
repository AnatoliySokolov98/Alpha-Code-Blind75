"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
class Trie {
    children;
    word;
    constructor() {
        this.children = {};
        this.word = null;
    }
    insert(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Trie();
            }
            node = node.children[char];
        }
        node.word = word;
    }
    search(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.word !== null;
    }
    startsWith(prefix) {
        let node = this;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
exports.Trie = Trie;
