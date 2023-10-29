export function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (nums[pivot] === target)
      return pivot;
    if(target === nums[left])
      return left;
    let pivotSide = nums[pivot] >= nums[left];
    let targetSide = target > nums[left]
    if(pivotSide === targetSide) {
      nums[pivot] > target ? right = pivot - 1 : left = pivot + 1;
    }
    else {
      pivotSide ? left = pivot + 1 : right = pivot - 1;
    }
  }
  return -1;
};





