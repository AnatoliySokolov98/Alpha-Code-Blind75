export function uniquePaths(m: number, n: number): number {
  const visited = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  const dp = (row: number, col: number):number => {
      if (row === m - 1 && col === n - 1)
          return 1;

      if (row >=m || col >= n)
          return 0;

      if(visited[row][col] != - 1)
          return visited[row][col];

      visited[row][col] = dp(row + 1, col) + dp (row, col + 1);
      return visited[row][col];
  }
  return dp(0,0);
};
