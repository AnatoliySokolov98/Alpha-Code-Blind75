import findMin from '../blind75/39.find-minimum-in-rotated-sorted-array';

describe('findMin', () => {
  it('Should find the minimum element in a sorted array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findMin(nums);
    expect(result).toBe(1);
  });

  it('Should find the minimum element in a rotated sorted array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const result = findMin(nums);
    expect(result).toBe(0);
  });

  it('Should handle an empty array', () => {
    const nums: number[] = [];
    const result = findMin(nums);
    expect(result).toBe(-1);
  });

  it('Should handle an array with a single element', () => {
    const nums = [7];
    const result = findMin(nums);
    expect(result).toBe(7);
  });

  it('Should handle an already sorted array', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findMin(nums);
    expect(result).toBe(1);
  });
});
