import isValid from '../blind75/07.valid-parentheses';

describe('isValid', () => {
  it('returns true for a valid string with balanced parentheses', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[()]}')).toBe(true);
    expect(isValid('([]{})')).toBe(true);
  });

  it('returns false for an invalid string with unbalanced parentheses', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('({[})')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isValid('')).toBe(true);
  });

  it('returns false for a string with unmatched closing parentheses', () => {
    expect(isValid(')')).toBe(false);
    expect(isValid('({}])')).toBe(false);
  });

  it('returns false for a string with unmatched opening parentheses', () => {
    expect(isValid('(')).toBe(false);
    expect(isValid('[{')).toBe(false);
  });
});
