import groupAnagrams from '../blind75/13.group-anagrams';

describe('groupAnagrams', () => {
  it('groups anagrams together', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = groupAnagrams(strs);
    expect(result).toEqual(
      expect.arrayContaining([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    );
  });

  it('handles an empty array', () => {
    const strs: string[] = [];
    const result = groupAnagrams(strs);
    expect(result).toEqual([]);
  });

  it('groups anagrams together in a larger set of words', () => {
    const strs = [
      'listen',
      'silent',
      'triangle',
      'integral',
      'evil',
      'vile',
      'hello',
      'world',
    ];
    const result = groupAnagrams(strs);
    expect(result).toEqual(
      expect.arrayContaining([
        ['listen', 'silent'],
        ['triangle', 'integral'],
        ['evil', 'vile'],
        ['hello'],
        ['world'],
      ])
    );
  });
});
