import Trie from '../blind75/46.implement-trie';

describe('Trie', () => {
  it('should insert and find a word', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
  });

  it('should insert and not find a word that is not in the Trie', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('app')).toBe(false);
  });

  it('should insert and not find a word with a common prefix', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('appetite')).toBe(false);
  });

  it('should return true for a word with a common prefix', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.startsWith('app')).toBe(true);
  });

  it('should return false for a prefix that is not in the Trie', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.startsWith('banana')).toBe(false);
  });

  it('should insert and find multiple words', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('appetite');
    trie.insert('banana');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('appetite')).toBe(true);
    expect(trie.search('banana')).toBe(true);
  });

  it('should handle a large number of words', () => {
    const trie = new Trie();
    const words = ['apple', 'appetite', 'banana', 'orange', 'strawberry'];
    words.forEach((word) => trie.insert(word));
    words.forEach((word) => expect(trie.search(word)).toBe(true));
  });
});
