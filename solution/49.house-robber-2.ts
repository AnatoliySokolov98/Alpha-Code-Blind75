import {rob as robOne }  from "./42.house-robber";

export function rob(nums: number[]): number {
  if (nums.length === 1)
      return nums[0];
  return Math.max(robOne(nums.slice(0, nums.length - 1)),  robOne(nums.slice(1)));
};