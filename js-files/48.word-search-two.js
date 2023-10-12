"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
const _46_implement_trie_1 = require("./46.implement-trie");
function findWords(board, words) {
    const res = [];
    const ROWS = board.length, COLS = board[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const visited = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));
    const root = new _46_implement_trie_1.Trie();
    for (let word of words) {
        root.insert(word);
    }
    const backtrack = (row, col, node) => {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || visited[row][col])
            return;
        if (!(Object.hasOwn(node.children, board[row][col])))
            return;
        visited[row][col] = true;
        node = node.children[board[row][col]];
        if (node.word) {
            res.push(node.word);
            node.word = null;
        }
        for (let [r, c] of directions) {
            backtrack(row + r, col + c, node);
        }
        visited[row][col] = false;
    };
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            backtrack(row, col, root);
        }
    }
    return res;
}
exports.findWords = findWords;
;
