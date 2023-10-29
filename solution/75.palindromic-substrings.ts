export function countSubstrings(s: string): number {
  const counter = (left: number, right: number):number => {
      let res = 0;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          res++;
          left--;
          right++;
      }
      return res;
  }
  let pals = 0;
  for(let i = 0; i < s.length; i++) {
      pals += counter(i, i);
      pals += counter(i - 1, i);
  }
  return pals;
};