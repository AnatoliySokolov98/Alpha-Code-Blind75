import rotate from '../blind75/12.rotate-image';

describe('rotate image', () => {
  it('rotates a 2x2 image', () => {
    const image = [
      [1, 2],
      [3, 4],
    ];
    rotate(image);
    expect(image).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  it('rotates a 3x3 image', () => {
    const image = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(image);
    expect(image).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('rotates a 4x4 image', () => {
    const image = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    rotate(image);
    expect(image).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });

  it('rotates an empty image', () => {
    const image: number[][] = [];
    rotate(image);
    expect(image).toEqual([]);
  });
});
