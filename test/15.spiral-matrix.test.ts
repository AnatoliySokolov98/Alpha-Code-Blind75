import spiralOrder from '../blind75/15.spiral-matrix';

describe('spiralOrder', () => {
  it('returns the elements in spiral order for a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = spiralOrder(matrix);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('returns the elements in spiral order for a 4x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = spiralOrder(matrix);
    expect(result).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it('returns the elements in spiral order for a 1x1 matrix', () => {
    const matrix = [[5]];
    const result = spiralOrder(matrix);
    expect(result).toEqual([5]);
  });
});
