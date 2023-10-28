export function lengthOfLongestSubstring(s: string): number {
  const letters: Set<string> = new Set();
  let res = 0, l = 0;
  for(let r = 0; r < s.length; r++) {
    while(letters.has(s[r])) {
      letters.delete(s[l]);
      l++;
    }
    letters.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
