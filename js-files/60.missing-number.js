"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingNumber = void 0;
function missingNumber(nums) {
    let num = nums.length;
    for (let i = 0; i < nums.length; i++) {
        num ^= i;
        num ^= nums[i];
    }
    return num;
}
exports.missingNumber = missingNumber;
;
