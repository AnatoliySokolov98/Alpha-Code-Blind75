import pacificAtlantic from '../blind75/70.atlantic-paficic-water-flow';

describe('pacificAtlantic', () => {
  it('returns the correct result for a simple example', () => {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ];
    const result = pacificAtlantic(heights);
    expect(result).toEqual(
      expect.arrayContaining([
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ])
    );
  });

  it('handles a single-cell input', () => {
    const heights = [[5]];
    const result = pacificAtlantic(heights);
    expect(result).toEqual([[0, 0]]);
  });

  it('handles an input with all the same height', () => {
    const heights = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3],
    ];
    const result = pacificAtlantic(heights);
    expect(result).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ])
    );
  });

  it('handles a larger input with multiple islands', () => {
    const heights = [
      [3, 3, 3, 3],
      [3, 1, 2, 3],
      [3, 2, 1, 3],
      [3, 3, 3, 3],
    ];
    const result = pacificAtlantic(heights);
    expect(result).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 0],
        [1, 3],
        [2, 0],
        [2, 3],
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
      ])
    );
  });
});
