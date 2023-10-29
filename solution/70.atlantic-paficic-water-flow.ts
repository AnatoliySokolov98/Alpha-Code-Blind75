export function pacificAtlantic(heights: number[][]): number[][] {
  const ROWS = heights.length;
  const COLS = heights[0].length;
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const pacific: [number, number][] = [];
  const atlantic: [number, number][] = [];

  for (let i = 0; i < ROWS; i++) {
      pacific.push([i, 0]);
      atlantic.push([i, COLS - 1]);
  }
  for (let i = 0; i < COLS; i++) {
      pacific.push([0, i]);
      atlantic.push([ROWS - 1, i]);
  }

  function bfs(stack: [number, number][]): Set<string> {
      const reachable: Set<string> = new Set();
      while (stack.length) {
          const [row, col] = stack.pop() as [number, number];
          reachable.add(`${row},${col}`);
          for (const [x, y] of directions) {
              const new_row = row + x;
              const new_col = col + y;
              if (
                  new_row < 0 || new_row >= ROWS ||
                  new_col < 0 || new_col >= COLS ||
                  heights[new_row][new_col] < heights[row][col] ||
                  reachable.has(`${new_row},${new_col}`)
              ) {
                  continue;
              }
              stack.push([new_row, new_col]);
              reachable.add(`${row},${col}`);
          }
      }
      return reachable;
  }
  const pacificReachable = bfs(pacific);
  const atlanticReachable = bfs(atlantic);
  const res = [...pacificReachable].filter(p => atlanticReachable.has(p))
      .map(coord => coord.split(',').map(Number));
  return res;
}
