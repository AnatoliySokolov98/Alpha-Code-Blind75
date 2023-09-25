"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProduct = void 0;
function maxProduct(nums) {
    let res = -Infinity, big = 1, small = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        [big, small] = [Math.max(big * num, small * num, num), Math.min(big * num, small * num, num)];
        res = Math.max(res, big);
    }
    return res;
}
exports.maxProduct = maxProduct;
;
