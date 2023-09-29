import { Trie } from "./46.implement-trie";

export class WordDictionary {
  root = new Trie;

  addWord(word: string): void {
      let node = this.root;
      for(let char of word) {
          if(!node.children[char])
              node.children[char] = new Trie();
          node = node.children[char];
      }
      node.word = true;
  }

  search(word: string, index: number = 0, node: Trie = this.root): boolean {
      for(let i = index; i < word.length; i ++) {
          const char = word[i];
          if(char === '.') {
              for(let child in node.children) {
                  if(this.search(word, i + 1, node.children[child]))
                      return true;
              }
              return false;
          }
          else if(!(Object.hasOwn(node.children, char)))
              return false;
          else
              node = node.children[char];
      }
      return node.word;
  }
}

