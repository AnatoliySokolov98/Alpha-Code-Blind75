import longestPalindrome from '../blind75/03.longest-palindromic-substring';

describe('Longest Palindromic Substring', () => {
  it('should find the longest palindromic substring in a given string', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
    expect(longestPalindrome('cbbd')).toEqual('bb');

    expect(longestPalindrome('ac')).toEqual('a');
    expect(longestPalindrome('racecar')).toEqual('racecar');

    expect(longestPalindrome('')).toEqual('');

    expect(longestPalindrome('abcdefg')).toEqual('a');
  });
});
