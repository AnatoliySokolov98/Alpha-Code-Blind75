import longestConsecutive from '../blind75/33.longest-consecutive-sequence';

describe('longestConsecutive', () => {
  it('should return 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('should handle an array with a single element', () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  it('should handle an array with no consecutive numbers', () => {
    expect(longestConsecutive([1, 7, 3, 5])).toBe(1);
  });

  it('should handle an array with consecutive numbers', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('should handle an array with duplicates', () => {
    expect(longestConsecutive([1, 2, 2, 3, 3, 4, 4, 5])).toBe(5);
  });
});
