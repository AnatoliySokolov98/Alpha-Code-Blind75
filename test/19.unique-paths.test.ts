import uniquePaths from '../blind75/19.unique-paths';

describe('uniquePaths', () => {
  it('returns the number of unique paths for a 3x3 grid', () => {
    const m = 3;
    const n = 3;
    const result = uniquePaths(m, n);
    expect(result).toBe(6);
  });

  it('returns the number of unique paths for a 1x1 grid', () => {
    const m = 1;
    const n = 1;
    const result = uniquePaths(m, n);
    expect(result).toBe(1);
  });

  it('returns the number of unique paths for a 3x2 grid', () => {
    const m = 3;
    const n = 2;
    const result = uniquePaths(m, n);
    expect(result).toBe(3);
  });

  it('returns the number of unique paths for a 7x3 grid', () => {
    const m = 7;
    const n = 3;
    const result = uniquePaths(m, n);
    expect(result).toBe(28);
  });
});
