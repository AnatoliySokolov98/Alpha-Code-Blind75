"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordBreak = void 0;
const trie_1 = require("./data-structures/trie");
function wordBreak(s, wordDict) {
    const root = new trie_1.Trie();
    for (let word of wordDict) {
        let node = root;
        for (let char of word) {
            if (!(Object.hasOwn(node.children, char))) {
                node.children[char] = new trie_1.Trie();
            }
            node = node.children[char];
        }
        node.word = true;
    }
    const visited = new Set();
    const dp = (index) => {
        if (index === s.length)
            return true;
        if (visited.has(index))
            return false;
        let node = root;
        for (let i = index; i < s.length; i++) {
            if (Object.hasOwn(node.children, s[i])) {
                node = node.children[s[i]];
                if (node.word && dp(i + 1)) {
                    return true;
                }
            }
            else {
                break;
            }
        }
        visited.add(index);
        return false;
    };
    return dp(0);
}
exports.wordBreak = wordBreak;
;
