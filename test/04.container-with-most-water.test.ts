import maxArea from '../blind75/04.container-with-most-water';

describe('Container With Most Water', () => {
  it('should find the maximum container area with most water', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    expect(maxArea([1, 1])).toEqual(1);
    expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
    expect(maxArea([1, 2, 1])).toEqual(2);

    expect(maxArea([])).toEqual(0);

    expect(maxArea([7])).toEqual(0);
  });
});
