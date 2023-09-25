"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rob = void 0;
function rob(nums) {
    const cache = {};
    const dp = (i) => {
        if (i >= nums.length) {
            return 0;
        }
        if (Object.hasOwn(cache, i)) {
            return cache[i];
        }
        cache[i] = Math.max(nums[i] + dp(i + 2), dp(i + 1));
        return cache[i];
    };
    return dp(0);
}
exports.rob = rob;
;
