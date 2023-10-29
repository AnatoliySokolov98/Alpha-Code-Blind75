import characterReplacement from '../blind75/71.longest-repeating-character-replacement';

describe('characterReplacement', () => {
  it('returns the correct result for a simple example', () => {
    const s = 'ABAB';
    const k = 2;
    const result = characterReplacement(s, k);
    expect(result).toBe(4);
  });

  it('handles a string with all the same characters', () => {
    const s = 'AAAA';
    const k = 2;
    const result = characterReplacement(s, k);
    expect(result).toBe(4);
  });

  it('handles k greater than the number of characters to replace', () => {
    const s = 'AABBBCCC';
    const k = 5;
    const result = characterReplacement(s, k);
    expect(result).toBe(8);
  });

  it('handles an empty string', () => {
    const s = '';
    const k = 2;
    const result = characterReplacement(s, k);
    expect(result).toBe(0);
  });

  it('handles k equal to the number of characters to replace', () => {
    const s = 'ABCD';
    const k = 4;
    const result = characterReplacement(s, k);
    expect(result).toBe(4);
  });
});
