export function maxSubArray(nums: number[]): number {
  let curr = -Infinity;
  let res = -Infinity;

  for(let num of nums) {
      curr < 0 ? curr = num : curr = curr + num;
      res = Math.max(res, curr);
  }
  return res;
};