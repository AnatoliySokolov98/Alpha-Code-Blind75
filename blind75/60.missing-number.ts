export function missingNumber(nums: number[]): number {
  let num = nums.length;
  for(let i = 0; i < nums.length; i++){
      num ^= i;
      num ^= nums[i];
  }
  return num;
};