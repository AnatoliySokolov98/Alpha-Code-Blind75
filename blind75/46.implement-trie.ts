export default class Trie {
  children: Record<string, Trie>;
  word: string | null;
  constructor() {
    this.children = {};
    this.word = null;
  }

  insert(word: string): void {}
  search(word: string): boolean {}

  startsWith(prefix: string): boolean {}
}
