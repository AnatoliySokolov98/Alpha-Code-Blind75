import { Trie } from "./46.implement-trie";

export function findWords(board: string[][], words: string[]): string[] {
  const res: Array<string> = [];
  const ROWS = board.length, COLS = board[0].length;
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  const visited = new Array(ROWS).fill(null).map(()=> new Array(COLS).fill(false));
  const root = new Trie();
  for(let word of words) {
      root.insert(word);
  }
  const backtrack = (row: number, col: number, node:Trie): void => {
      if(row < 0 || row >= ROWS || col < 0 || col>= COLS || visited[row][col])
          return;
      if(!(Object.hasOwn(node.children, board[row][col])))
          return;
      visited[row][col] = true;

      node = node.children[board[row][col]]
      if(node.word) {
          res.push(node.word);
          node.word = null;
      }

      for(let [r, c] of directions) {
          backtrack(row + r, col + c, node);
      }
      visited[row][col] = false;
  }

  for(let row = 0; row < ROWS; row++) {
      for(let col = 0; col < COLS; col++) {
          backtrack(row, col, root);
      }
  }
  return res;
};