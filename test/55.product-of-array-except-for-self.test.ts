import productExceptSelf from '../blind75/55.product-of-array-except-for-self';

describe('productExceptSelf', () => {
  it('should return the correct result for a simple input', () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    const result = productExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  it('should handle an input with a single element', () => {
    const nums = [5];
    const expected = [1];
    const result = productExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  it('should handle an input with all zeros', () => {
    const nums = [0, 0, 0, 0];
    const expected = [0, 0, 0, 0];
    const result = productExceptSelf(nums);
    expect(result).toEqual(expected);
  });
});
