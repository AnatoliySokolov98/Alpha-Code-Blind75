"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numIslands = void 0;
function numIslands(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const visited = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));
    let islands = 0;
    const dfs = (row, col) => {
        visited[row][col] = true;
        for (let [r, c] of directions) {
            dfs(row + r, col + c);
        }
    };
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === '1' && !visited[row][col]) {
                islands++;
                dfs(row, col);
            }
        }
    }
    return islands;
}
exports.numIslands = numIslands;
;
