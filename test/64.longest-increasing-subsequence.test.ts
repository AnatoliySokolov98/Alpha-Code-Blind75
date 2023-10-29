import lengthOfLIS from '../blind75/64.longest-increasing-subsequence';

describe('lengthOfLIS', () => {
  it('should return 0 for an empty array', () => {
    const nums: number[] = [];
    expect(lengthOfLIS(nums)).toBe(0);
  });

  it('should return 1 for an array with a single element', () => {
    const nums = [5];
    expect(lengthOfLIS(nums)).toBe(1);
  });

  it('should return the correct length for an array with all identical elements', () => {
    const nums = [3, 3, 3, 3, 3, 3];
    expect(lengthOfLIS(nums)).toBe(1);
  });

  it('should return the correct length for an array in ascending order', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(lengthOfLIS(nums)).toBe(5);
  });

  it('should return the correct length for an array in descending order', () => {
    const nums = [5, 4, 3, 2, 1];
    expect(lengthOfLIS(nums)).toBe(1);
  });
});
