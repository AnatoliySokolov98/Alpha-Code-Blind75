import isAnagram from '../blind75/56.valid-anagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    const s = 'listen';
    const t = 'silent';
    expect(isAnagram(s, t)).toBe(true);
  });

  it('should return false for strings with different lengths', () => {
    const s = 'hello';
    const t = 'world!';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('should return false for strings with the same length but not anagrams', () => {
    const s = 'apple';
    const t = 'banana';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('should return true for anagrams with special characters', () => {
    const s = 'rac*';
    const t = '*car';
    expect(isAnagram(s, t)).toBe(true);
  });
});
