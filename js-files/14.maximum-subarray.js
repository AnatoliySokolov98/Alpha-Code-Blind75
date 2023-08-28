"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubArray = void 0;
function maxSubArray(nums) {
    let curr = -Infinity;
    let res = -Infinity;
    for (let num of nums) {
        curr < 0 ? curr = num : curr = curr + num;
        res = Math.max(res, curr);
    }
    return res;
}
exports.maxSubArray = maxSubArray;
;
