import maxSubArray from '../blind75/14.maximum-subarray';

describe('maxSubArray', () => {
  it('returns the maximum sum for a simple array', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubArray(nums);
    expect(result).toBe(6);
  });

  it('returns the maximum sum for an array with one element', () => {
    const nums = [5];
    const result = maxSubArray(nums);
    expect(result).toBe(5);
  });

  it('returns the maximum sum for an array with negative numbers', () => {
    const nums = [-2, -5, -1, -8];
    const result = maxSubArray(nums);
    expect(result).toBe(-1);
  });

  it('returns the maximum sum for an array with all positive numbers', () => {
    const nums = [2, 3, 4, 1, 2];
    const result = maxSubArray(nums);
    expect(result).toBe(12);
  });
});
