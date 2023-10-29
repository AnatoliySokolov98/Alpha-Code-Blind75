import threeSum from '../blind75/05.three-sum';

describe('Three Sum', () => {
  it('should find all unique triplets that sum up to zero', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);

    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);

    expect(threeSum([1, 2, -2, -1])).toEqual([]);

    expect(threeSum([])).toEqual([]);
  });
});
