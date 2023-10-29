import isPalindrome from '../blind75/32.valid-palindrome';

describe('isPalindrome', () => {
  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a valid alphanumeric palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return true for a valid alphanumeric palindrome with mixed case', () => {
    expect(isPalindrome('Able , was I saw eLba')).toBe(true);
  });

  it('should return true for a valid numeric palindrome', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  it('should return false for a non-palindromic string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should handle a single-character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should handle non-alphanumeric characters', () => {
    expect(isPalindrome('race car!')).toBe(true);
  });

  it('should handle whitespace', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });
});
