export function productExceptSelf(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(1);
  for(let i = nums.length - 2; i >= 0; i--) {
      res[i] = res[i + 1] * nums[i + 1];
  }

  let left = 1;
  for(let i = 1; i < nums.length; i ++) {
      left *= nums[i - 1];
      res[i] *= left;
  }
  return res;
};