import exist from '../blind75/23.word-search';

describe('exist function', () => {
  it('should return true when the word exists on the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];

    const word = 'ABCCED';

    expect(exist(board, word)).toBe(true);
  });

  it('should return true when the word exists on the board with repeated characters', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];

    const word = 'SEE';

    expect(exist(board, word)).toBe(true);
  });

  it('should return false when the word does not exist on the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];

    const word = 'ABCB';

    expect(exist(board, word)).toBe(false);
  });

  it('should return false when the word is longer than the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
    ];

    const word = 'ABCFSEECED';

    expect(exist(board, word)).toBe(false);
  });
});
