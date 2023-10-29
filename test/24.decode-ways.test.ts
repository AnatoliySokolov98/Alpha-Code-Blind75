import numDecodings from '../blind75/24.decode-ways';

describe('numDecodings function', () => {
  it('should return the number of decoding ways for a valid string', () => {
    expect(numDecodings('12')).toBe(2);
    expect(numDecodings('226')).toBe(3);
    expect(numDecodings('10')).toBe(1);
    expect(numDecodings('27')).toBe(1);
  });

  it('should return 0 for a string starting with "0"', () => {
    expect(numDecodings('01')).toBe(0);
    expect(numDecodings('001')).toBe(0);
  });

  it('should handle cases with multiple "0"s correctly', () => {
    expect(numDecodings('100')).toBe(0);
    expect(numDecodings('1001')).toBe(0);
  });

  it('should handle edge cases', () => {
    expect(numDecodings('1')).toBe(1);
    expect(numDecodings('0')).toBe(0);
    expect(numDecodings('123456789')).toBe(3);
  });
});
