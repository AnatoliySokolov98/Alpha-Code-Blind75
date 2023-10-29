import minWindow from '../blind75/22.minimum-window-substring';

describe('minWindow', () => {
  it('returns the minimum window substring', () => {
    const s = 'ADOBECODEBANC';
    const t = 'ABC';
    const result = minWindow(s, t);
    expect(result).toBe('BANC');
  });

  it('returns an empty string when there is no valid window', () => {
    const s = 'a';
    const t = 'b';
    const result = minWindow(s, t);
    expect(result).toBe('');
  });

  it('returns an empty string when s is shorter than t', () => {
    const s = 'abc';
    const t = 'abcdef';
    const result = minWindow(s, t);
    expect(result).toBe('');
  });
});
