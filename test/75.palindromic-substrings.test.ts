import countSubstrings from '../blind75/75.palindromic-substrings';

describe('countSubstrings', () => {
  it('returns the correct number of palindromic substrings for a simple example', () => {
    const s = 'abc';
    const result = countSubstrings(s);
    expect(result).toBe(3);
  });

  it('handles palindromic substrings with different lengths', () => {
    const s = 'aabaa';
    const result = countSubstrings(s);
    expect(result).toBe(9);
  });

  it('handles an empty string', () => {
    const s = '';
    const result = countSubstrings(s);
    expect(result).toBe(0);
  });

  it('handles a string with all the same characters', () => {
    const s = 'aaaaa';
    const result = countSubstrings(s);
    expect(result).toBe(15);
  });

  it('handles a single-character string', () => {
    const s = 'x';
    const result = countSubstrings(s);
    expect(result).toBe(1);
  });
});
