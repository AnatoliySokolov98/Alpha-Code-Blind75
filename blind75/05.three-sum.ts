export function threeSum(nums: number[]): number[][] {
  nums.sort((a,b) => a - b);
  let res: number [] [] = [];
  for(let i = 0; i < nums.length; i++) {
    let target = 0 - nums[i];
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      let total = nums[l] + nums[r];
      if (total === target) {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l + 1] === nums[l])
          l++;
        l++;
      }
      else if (total < target)
        l++;
      else
        r--;
    }

    while (nums[i + 1] === nums[i])
      i++;
  }
  return res;
};

