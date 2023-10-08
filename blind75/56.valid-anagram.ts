function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length)
    return false;
  const chars: Record <string, number> = {};
  for(let i = 0; i < s.length; i ++) {
      chars[s[i]] = (chars[s[i]] || 0) + 1;
      chars[t[i]] = (chars[t[i]] || 0) - 1;
  }
  return Math.max(...Object.values(chars))  === 0;
};