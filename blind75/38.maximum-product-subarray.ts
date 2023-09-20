export function maxProduct(nums: number[]): number {
  let res = -Infinity, big = 1, small = 1;

  for(let i = 0; i < nums.length; i ++) {
      const num = nums[i];
      [big, small] = [Math.max(big * num, small * num, num), Math.min(big * num, small * num, num)];
      res = Math.max(res, big);
  }
  return res;
};
