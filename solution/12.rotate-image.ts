/**
 Do not return anything, modify matrix in-place instead.
 */
 export function rotate(matrix: number[][]): void {
  const SIDE = matrix.length;
  for(let row = 0; row < SIDE; row++) {
    for(let col = 0; col < row; col ++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }
  for(let row = 0; row < SIDE; row++) {
    for(let col = 0; col < Math.floor(SIDE / 2); col ++) {
      [matrix[row][col], matrix[row][SIDE - 1 - col]] = [matrix[row][SIDE - 1 - col], matrix[row][col]];
    }
  }

 };


