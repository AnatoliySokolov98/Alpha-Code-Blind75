import setZeroes from '../blind75/21.set-matrix-zeroes';

describe('setZeroes', () => {
  it('sets the zeros in the middle of the matrix to zero', () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    const expectedMatrix = [
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(expectedMatrix);
  });

  it('sets the zeros at the edges of the matrix to zero', () => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const expectedMatrix = [
      [0, 0, 0],
      [0, 4, 5],
      [0, 7, 8],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(expectedMatrix);
  });

  it('does not modify a matrix with no zeros', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(expectedMatrix);
  });

  it('sets the entire matrix to zeros when both row and column have zeros', () => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const expectedMatrix = [
      [0, 0, 0],
      [0, 4, 5],
      [0, 7, 8],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(expectedMatrix);
  });
});
