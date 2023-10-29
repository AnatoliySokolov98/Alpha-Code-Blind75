import rob from '../blind75/42.house-robber';

describe('rob', () => {
  it('should return 0 for an empty array', () => {
    expect(rob([])).toBe(0);
  });

  it('should return the correct result for a single-house scenario', () => {
    expect(rob([1])).toBe(1);
    expect(rob([5])).toBe(5);
  });

  it('should return the correct result for a simple scenario', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it('should return the correct result for a more complex scenario', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
});
