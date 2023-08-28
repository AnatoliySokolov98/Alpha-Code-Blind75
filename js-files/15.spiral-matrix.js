"use strict";
function spiralOrder(matrix) {
    let start_row = 0, start_col = 0, end_row = matrix.length - 1, end_col = matrix[0].length - 1;
    const res = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let row = 0, col = -1, direction = 0;
    while (start_row <= end_row && start_col <= end_col) {
        const next_row = row + directions[direction][0];
        const next_col = col + directions[direction][1];
        if (next_row >= start_row && next_row <= end_row && next_col >= start_col && next_col <= end_col) {
            [row, col] = [next_row, next_col];
            res.push(matrix[row][col]);
        }
        else {
            switch (direction) {
                case 0:
                    start_row++;
                    break;
                case 1:
                    end_col--;
                    break;
                case 2:
                    end_row--;
                    break;
                case 3:
                    start_col++;
                    break;
            }
            direction = (direction + 1) % directions.length;
        }
    }
    return res;
}
;
