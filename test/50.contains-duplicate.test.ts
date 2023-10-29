import containsDuplicate from '../blind75/50.contains-duplicate';

describe('containsDuplicate', () => {
  it('should return true for an array with duplicate values', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('should return false for an array with no duplicate values', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('should return true for an array with multiple duplicate values', () => {
    const nums = [1, 2, 2, 3, 4, 3];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('should return false for an empty array', () => {
    const nums: number[] = [];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('should handle a large array with duplicates', () => {
    const nums = Array.from({ length: 1000 }, (_, i) => (i % 100) + 1);
    expect(containsDuplicate(nums)).toBe(true);
  });
});
