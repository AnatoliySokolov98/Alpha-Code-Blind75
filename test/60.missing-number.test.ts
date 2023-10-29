import missingNumber from '../blind75/60.missing-number';

describe('missingNumber', () => {
  it('should return the missing number in an array with one missing element', () => {
    const nums = [0, 1, 3];
    expect(missingNumber(nums)).toBe(2);
  });

  it('should return 0 when the missing number is the first element', () => {
    const nums = [1, 2, 3];
    expect(missingNumber(nums)).toBe(0);
  });

  it('should return the last number when it is missing', () => {
    const nums = [0, 1, 2, 3];
    expect(missingNumber(nums)).toBe(4);
  });

  it('should return the missing number in a shuffled array', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    expect(missingNumber(nums)).toBe(8);
  });

  it('should return 0 for an empty array', () => {
    const nums: number[] = [];
    expect(missingNumber(nums)).toBe(0);
  });

  it('should return 0 when no number is missing', () => {
    const nums = [0, 1, 2, 3, 4, 5];
    expect(missingNumber(nums)).toBe(6);
  });

  it('should handle a large array with one missing number', () => {
    const nums = [...Array(100000).keys()];
    const missing = 42;
    const shuffledNums = nums.filter((num) => num !== missing);
    expect(missingNumber(shuffledNums)).toBe(missing);
  });
});
