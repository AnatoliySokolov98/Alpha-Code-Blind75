"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rob = void 0;
const _42_house_robber_1 = require("./42.house-robber");
function rob(nums) {
    if (nums.length === 1)
        return nums[0];
    return Math.max((0, _42_house_robber_1.rob)(nums.slice(0, nums.length - 1)), (0, _42_house_robber_1.rob)(nums.slice(1)));
}
exports.rob = rob;
;
