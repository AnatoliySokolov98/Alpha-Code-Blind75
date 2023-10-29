import wordBreak from '../blind75/35.word-break';

describe('wordBreak', () => {
  it('should return true for valid word break', () => {
    const s = 'leetcode';
    const wordDict: string[] = ['leet', 'code'];
    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it('should return true for valid word break with different word order', () => {
    const s = 'applepenapple';
    const wordDict: string[] = ['apple', 'pen'];
    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it('should return false for invalid word break', () => {
    const s = 'catsandog';
    const wordDict: string[] = ['cats', 'dog', 'sand', 'and', 'cat'];
    expect(wordBreak(s, wordDict)).toBe(false);
  });

  it('should return true for an empty string', () => {
    const s = '';
    const wordDict: string[] = ['a', 'b', 'c'];
    expect(wordBreak(s, wordDict)).toBe(true);
  });
});
