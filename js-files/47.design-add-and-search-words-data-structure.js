"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordDictionary = void 0;
const _46_implement_trie_1 = require("./46.implement-trie");
class WordDictionary {
    root = new _46_implement_trie_1.Trie;
    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char])
                node.children[char] = new _46_implement_trie_1.Trie();
            node = node.children[char];
        }
        node.word = word;
    }
    search(word, index = 0, node = this.root) {
        for (let i = index; i < word.length; i++) {
            const char = word[i];
            if (char === '.') {
                for (let child in node.children) {
                    if (this.search(word, i + 1, node.children[child]))
                        return true;
                }
                return false;
            }
            else if (!(Object.hasOwn(node.children, char)))
                return false;
            else
                node = node.children[char];
        }
        return node.word !== null;
    }
}
exports.WordDictionary = WordDictionary;
