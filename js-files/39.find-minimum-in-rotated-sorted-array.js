"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMin = void 0;
function findMin(nums) {
    if (nums[0] <= nums[nums.length - 1])
        return nums[0];
    let left = 1, right = nums.length - 1;
    while (left <= right) {
        const pivot = Math.floor((left + right) / 2);
        if (nums[pivot] < nums[pivot - 1])
            return nums[pivot];
        if (nums[pivot] > nums[0])
            left = pivot + 1;
        else
            right = pivot - 1;
    }
    return -1;
}
exports.findMin = findMin;
;
