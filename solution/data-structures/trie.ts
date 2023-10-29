export class Trie {
  word: boolean;
  children: Record<string, Trie>;
  constructor() {
      this.word = false;
      this.children = {};
  }
}