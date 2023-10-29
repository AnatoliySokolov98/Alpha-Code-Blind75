import alienOrder from '../blind75/61.alien-dictionary';

describe('alienOrder', () => {
  it('should return the correct character order for a simple case', () => {
    const words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
    expect(alienOrder(words)).toBe('wertf');
  });

  it('should return an empty string for a case with circular dependencies', () => {
    const words = ['abc', 'ab'];
    expect(alienOrder(words)).toBe('');
  });

  it('should handle an empty array of words', () => {
    const words: string[] = [];
    expect(alienOrder(words)).toBe('');
  });

  it('should return the correct character order for a case with multiple solutions', () => {
    const words = ['z', 'z', 'z'];
    const result = alienOrder(words);
    expect(result === 'z' || result === '').toBe(true);
  });

});
