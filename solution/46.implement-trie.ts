export class Trie {
  children: Record<string, Trie>
  word: string | null
  constructor() {
      this.children = {};
      this.word = null;
  }

  insert(word: string): void {
      let node: Trie = this;
      for(let char of word) {
          if (!node.children[char]) {
              node.children[char] = new Trie();
          }
          node = node.children[char];
      }
      node.word = word;
  }
  search(word: string): boolean {
      let node: Trie = this;
      for(let char of word) {
          if (!node.children[char]) {
              return false;
          }
          node = node.children[char];
      }
      return node.word !== null ;
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
