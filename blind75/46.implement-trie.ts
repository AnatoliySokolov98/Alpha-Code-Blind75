export class Trie {
  children: Record<string, Trie>
  word: boolean
  constructor() {
      this.children = {};
      this.word = false;
  }

  insert(word: string): void {
      let node: Trie = this;
      for(let char of word) {
          if (!node.children[char]) {
              node.children[char] = new Trie();
          }
          node = node.children[char];
      }
      node.word = true;
  }
  search(word: string): boolean {
      let node: Trie = this;
      for(let char of word) {
          if (!node.children[char]) {
              return false;
          }
          node = node.children[char];
      }
      return node.word;
  }

  startsWith(prefix: string): boolean {
      let node: Trie = this;
      for(let char of prefix) {
          if (!node.children[char]) {
              return false;
          }
          node = node.children[char]
      }
      return true;
  }
}
