import { Trie} from "./data-structures/trie";

export function wordBreak(s: string, wordDict: string[]): boolean {
  const root = new Trie();
  for (let word of wordDict) {
      let node = root;
      for (let char of word) {
          if(!(Object.hasOwn(node.children, char))) {
              node.children[char] = new Trie();
          }
          node = node.children[char];
      }
      node.word = true;
  }

  const visited: Set<number> = new Set();

  const dp = (index: number): boolean => {
      if (index === s.length)
          return true;
      if (visited.has(index))
          return false;
      let node = root;
      for(let i = index; i < s.length; i++) {
          if(Object.hasOwn(node.children, s[i])) {
              node = node.children[s[i]];
              if(node.word && dp(i + 1)) {
                  return true;
              }
          }
          else {
              break;
          }
      }
      visited.add(index);
      return false;
  }
  return dp(0);
};