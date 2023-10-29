import WordDictionary from '../blind75/47.design-add-and-search-words-data-structure';

describe('WordDictionary', () => {
  it('should add and find a word', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('apple');
    expect(wordDictionary.search('apple')).toBe(true);
  });

  it('should add and not find a word that is not in the dictionary', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('apple');
    expect(wordDictionary.search('app')).toBe(false);
  });

  it('should add and not find a word with a common prefix', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('apple');
    expect(wordDictionary.search('appetite')).toBe(false);
  });

  it('should handle wildcard characters in search', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('apple');
    wordDictionary.addWord('banana');
    expect(wordDictionary.search('app.e')).toBe(true);
  });

  it('should handle a large number of words', () => {
    const wordDictionary = new WordDictionary();
    const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
    words.forEach((word) => wordDictionary.addWord(word));
    words.forEach((word) => expect(wordDictionary.search(word)).toBe(true));
  });
});
