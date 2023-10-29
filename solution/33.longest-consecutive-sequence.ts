export function longestConsecutive(nums: number[]): number {
  const uniques = new Set(nums);
  let res = 0;
  for (let num of uniques) {
      if(uniques.has(num - 1))
          continue;
      let count = 0;
      while(uniques.has(num)) {
          count++;
          num++;
      }
      res = Math.max(res, count);
  }
  return res;
};