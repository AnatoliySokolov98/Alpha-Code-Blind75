import eraseOverlapIntervals from '../blind75/72.non-overlapping-intervals';

describe('eraseOverlapIntervals', () => {
  it('returns the correct result for a simple example', () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [3, 5],
      [5, 6],
    ];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toBe(1);
  });

  it('handles non-overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [4, 6],
      [7, 9],
    ];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toBe(0);
  });

  it('handles an empty input', () => {
    const intervals: number[][] = [];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toBe(0);
  });

  it('handles a single interval', () => {
    const intervals = [[1, 2]];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toBe(0);
  });
});
