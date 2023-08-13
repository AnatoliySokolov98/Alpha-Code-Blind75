"use strict";
function twoSum(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (Object.hasOwn(obj, complement)) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
    return [];
}
;
