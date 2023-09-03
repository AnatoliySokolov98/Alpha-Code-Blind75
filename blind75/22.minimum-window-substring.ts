export function minWindow(s: string, t: string): string {
  if (t.length > s.length)
      return '';
  const tCounter: Record<string, number> = {};
  const sCounter: Record<string, number> = {};
  let res = [0, Infinity];
  for(let char of t) {
      tCounter[char] = tCounter[char] ?? 0;
      tCounter[char] ++;
  }

  let matches = Object.keys(tCounter).length;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
      let char = s[right];
      if(tCounter[char]) {
          sCounter[char] = sCounter[char] ?? 0;
          sCounter[char]++;
          if(sCounter[char] === tCounter[char])
          {
              matches--;
          }
      }
      while(matches === 0) {
          char = s[left];
          if(!sCounter[char]) {
              left++;
          }
          else if(tCounter[char] < sCounter[char]) {
              sCounter[char]--;
              left++;
          }
          else {
              if(res[1] - res[0] > right - left) {
                  res = [left, right];
              }
              break;
          }
      }
  }
  return res[1] === Infinity ? '' : s.slice(res[0], res[1] + 1);
};

// time O(t + s)
// space O(1)