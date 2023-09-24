export function rob(nums: number[]): number {
  const cache: Record<number, number> = {};
  const dp = (i: number):number => {
      if(i >= nums.length) {
          return 0;
      }
      if(Object.hasOwn(cache, i)) {
          return cache[i];
      }
      cache[i] = Math.max(nums[i] + dp(i + 2), dp(i + 1));
      return cache[i];
  }
  return dp(0);
};
