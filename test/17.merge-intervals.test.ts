import merge from '../blind75/17.merge-intervals';

describe('merge', () => {
  it('merges overlapping intervals in a list', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = merge(intervals);
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('merges non-overlapping intervals in a list', () => {
    const intervals = [
      [1, 3],
      [5, 6],
      [8, 10],
      [15, 18],
    ];
    const result = merge(intervals);
    expect(result).toEqual(intervals);
  });

  it('merges adjacent intervals in a list', () => {
    const intervals = [
      [1, 3],
      [3, 6],
      [8, 10],
      [15, 18],
    ];
    const result = merge(intervals);
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('merges a single interval', () => {
    const intervals = [[1, 3]];
    const result = merge(intervals);
    expect(result).toEqual(intervals);
  });

  it('merges intervals with negative values', () => {
    const intervals = [
      [-2, -1],
      [0, 2],
      [-1, 1],
    ];
    const result = merge(intervals);
    expect(result).toEqual([[-2, 2]]);
  });
});
