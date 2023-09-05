"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setZeroes = void 0;
function setZeroes(matrix) {
    let row_zeroes = false, col_zeroes = false;
    const ROWS = matrix.length, COLS = matrix[0].length;
    for (let row = 0; row < ROWS; row++) {
        if (matrix[row][0] === 0)
            col_zeroes = true;
    }
    for (let col = 0; col < COLS; col++) {
        if (matrix[0][col] === 0)
            row_zeroes = true;
    }
    for (let row = 1; row < ROWS; row++) {
        for (let col = 1; col < COLS; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    for (let row = 1; row < ROWS; row++) {
        for (let col = 1; col < COLS; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0)
                matrix[row][col] = 0;
        }
    }
    if (row_zeroes) {
        for (let col = 0; col < COLS; col++)
            matrix[0][col] = 0;
    }
    if (col_zeroes) {
        for (let row = 0; row < ROWS; row++)
            matrix[row][0] = 0;
    }
}
exports.setZeroes = setZeroes;
;
