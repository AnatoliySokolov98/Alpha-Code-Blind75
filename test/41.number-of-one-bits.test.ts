import hammingWeight from '../blind75/41.number-of-one-bits';

describe('hammingWeight', () => {
  it('should return 0 for n = 0', () => {
    expect(hammingWeight(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(hammingWeight(1)).toBe(1);
  });

  it('should return 3 for n = 11 (binary 1011)', () => {
    expect(hammingWeight(11)).toBe(3);
  });

  it('should return 5 for n = 31 (binary 11111)', () => {
    expect(hammingWeight(31)).toBe(5);
  });

  it('should return 32 for n = 0xFFFFFFFF (32-bit all ones)', () => {
    expect(hammingWeight(0xffffffff)).toBe(32);
  });

  it('should return 16 for n = 0xFFFF0000 (16 ones, 16 zeros)', () => {
    expect(hammingWeight(0xffff0000)).toBe(16);
  });
});
