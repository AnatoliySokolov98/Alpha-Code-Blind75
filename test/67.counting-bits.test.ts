import countBits from '../blind75/67.counting-bits';

describe('countBits', () => {
  it('should return the correct count of set bits for a simple case', () => {
    const n = 5;
    const expected = [0, 1, 1, 2, 1, 2];
    expect(countBits(n)).toEqual(expected);
  });

  it('should return the correct count of set bits for n = 0', () => {
    const n = 0;
    const expected = [0];
    expect(countBits(n)).toEqual(expected);
  });

  it('should return the correct count of set bits for n = 1', () => {
    const n = 1;
    const expected = [0, 1];
    expect(countBits(n)).toEqual(expected);
  });

  it('should handle a large value of n', () => {
    const n = 100;
    const result = countBits(n);
    expect(result.length).toBe(101);
    expect(result[n]).toBeGreaterThan(0);
  });

  it('should return the correct count of set bits for n = 15', () => {
    const n = 15;
    const expected = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
    expect(countBits(n)).toEqual(expected);
  });
});
