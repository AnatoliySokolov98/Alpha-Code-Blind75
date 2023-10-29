import lengthOfLongestSubstring from '../blind75/02.longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it('should find the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('')).toEqual(0);
    expect(lengthOfLongestSubstring('abcdefg')).toEqual(7);
  });
});
