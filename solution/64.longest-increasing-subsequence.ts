export function lengthOfLIS(nums: number[]): number {
  const res: number[] = [];
  for (let num of nums) {
      if(!res.length || num > res[res.length - 1]) {
          res.push(num);
          continue;
      }

      let l = 0, r = res.length - 1;
      let position = r;
      while (l <= r ) {
          const p = Math.floor((l + r) / 2);
          if(num <= res[p]) {
              position = p;
              r = p - 1;
          }
          else
              l = p + 1;
      }
      res[position] = num;
  }
  return res.length;
};