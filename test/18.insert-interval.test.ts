import insert from '../blind75/18.insert-interval';

describe('insert', () => {
  it('inserts a new interval in the middle of existing intervals', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  it('inserts a new interval at the beginning of existing intervals', () => {
    const intervals = [[6, 9]];
    const newInterval = [2, 5];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [2, 5],
      [6, 9],
    ]);
  });

  it('inserts a new interval at the end of existing intervals', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [10, 12];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 3],
      [6, 9],
      [10, 12],
    ]);
  });

  it('inserts a new interval that overlaps with multiple existing intervals', () => {
    const intervals = [
      [1, 3],
      [4, 6],
      [7, 9],
    ];
    const newInterval = [2, 8];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([[1, 9]]);
  });

  it('inserts a new interval that is completely contained within an existing interval', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 3];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 3],
      [6, 9],
    ]);
  });

  it('inserts a new interval into an empty list of intervals', () => {
    const intervals: number[][] = [];
    const newInterval = [2, 5];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([[2, 5]]);
  });
});
