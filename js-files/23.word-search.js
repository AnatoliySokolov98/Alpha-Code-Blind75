"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exist = void 0;
function exist(board, word) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const ROWS = board.length, COLS = board[0].length;
    const backtrack = (row, col, index) => {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || board[row][col] !== word[index])
            return false;
        if (index === word.length - 1)
            return true;
        board[row][col] = '!';
        for (let [newRow, newCol] of directions) {
            if (backtrack(row + newRow, col + newCol, index + 1))
                return true;
        }
        board[row][col] = word[index];
        return false;
    };
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (backtrack(row, col, 0))
                return true;
        }
    }
    return false;
}
exports.exist = exist;
;
