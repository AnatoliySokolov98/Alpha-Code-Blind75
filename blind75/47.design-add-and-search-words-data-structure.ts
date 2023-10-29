import Trie from './46.implement-trie';

export default class WordDictionary {
  root = new Trie();

  addWord(word: string): void {}

  search(word: string, index: number = 0, node: Trie = this.root): boolean {}
}
