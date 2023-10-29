import longestCommonSubsequence from '../blind75/76.longest-common-subsequence';

describe('longestCommonSubsequence', () => {
  it('returns the correct length for two identical strings', () => {
    const text1 = 'abcdef';
    const text2 = 'abcdef';
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toBe(6);
  });

  it('returns the correct length for partially overlapping strings', () => {
    const text1 = 'abcde';
    const text2 = 'ace';
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toBe(3);
  });

  it('returns 0 for completely different strings', () => {
    const text1 = 'xyz';
    const text2 = 'abc';
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toBe(0);
  });

  it('handles empty strings correctly', () => {
    const text1 = '';
    const text2 = 'abc';
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toBe(0);
  });

  it('handles one empty string and one non-empty string', () => {
    const text1 = 'abc';
    const text2 = '';
    const result = longestCommonSubsequence(text1, text2);
    expect(result).toBe(0);
  });
});
