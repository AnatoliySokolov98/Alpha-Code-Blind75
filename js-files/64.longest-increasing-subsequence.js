"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLIS = void 0;
function lengthOfLIS(nums) {
    const res = [];
    for (let num of nums) {
        if (!res.length || num > res[res.length - 1]) {
            res.push(num);
            continue;
        }
        let l = 0, r = res.length - 1;
        let position = r;
        while (l <= r) {
            const p = Math.floor((l + r) / 2);
            if (num <= res[p]) {
                position = p;
                r = p - 1;
            }
            else
                l = p + 1;
        }
        res[position] = num;
    }
    return res.length;
}
exports.lengthOfLIS = lengthOfLIS;
;
