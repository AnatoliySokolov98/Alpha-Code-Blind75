import maxProduct from '../blind75/38.maximum-product-subarray';

describe('maxProduct', () => {
  it('Should find the maximum product in an array with positive integers', () => {
    const nums = [2, 3, 4, 5];
    const result = maxProduct(nums);
    expect(result).toBe(120);
  });

  it('Should find the maximum product in an array with negative integers', () => {
    const nums = [-2, -3, -4, -5];
    const result = maxProduct(nums);
    expect(result).toBe(120);
  });

  it('Should handle an array with a single element', () => {
    const nums = [7];
    const result = maxProduct(nums);
    expect(result).toBe(7);
  });
});
