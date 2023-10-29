import search from '../blind75/10.search-in-rotated-sorted-array';

describe('search in rotated sorted array', () => {
  it('finds the index of the target in a rotated sorted array', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(search([1], 0)).toBe(-1);
    expect(search([1], 1)).toBe(0);
    expect(search([4, 5, 6, 7, 8, 9, 1, 2, 3], 6)).toBe(2);
    expect(search([3, 1], 1)).toBe(1);
  });

  it('returns -1 for an empty array', () => {
    expect(search([], 0)).toBe(-1);
  });

  it('returns -1 for a target not in the array', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 8)).toBe(-1);
  });
});
