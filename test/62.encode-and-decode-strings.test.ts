import { encode, decode } from '../blind75/62.encode-and-decode-strings';

describe('encode and decode', () => {
  it('should correctly encode and decode a list of strings', () => {
    const inputStrings = ['apple', 'banana', 'cherry', 'date'];
    const encodedString = encode(inputStrings);
    const decodedStrings = decode(encodedString);

    expect(decodedStrings).toEqual(inputStrings);
  });

  it('should handle empty input strings', () => {
    const inputStrings: string[] = [];
    const encodedString = encode(inputStrings);
    const decodedStrings = decode(encodedString);

    expect(decodedStrings).toEqual(inputStrings);
  });

  it('should handle a single empty string', () => {
    const inputStrings = [''];
    const encodedString = encode(inputStrings);
    const decodedStrings = decode(encodedString);

    expect(decodedStrings).toEqual(inputStrings);
  });

  it('should handle a mix of empty and non-empty strings', () => {
    const inputStrings = ['apple', '', 'banana', '', 'cherry'];
    const encodedString = encode(inputStrings);
    const decodedStrings = decode(encodedString);

    expect(decodedStrings).toEqual(inputStrings);
  });
});
