"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsecutive = void 0;
function longestConsecutive(nums) {
    const uniques = new Set(nums);
    let res = 0;
    for (let num of uniques) {
        if (uniques.has(num - 1))
            continue;
        let count = 0;
        while (uniques.has(num)) {
            count++;
            num++;
        }
        res = Math.max(res, count);
    }
    return res;
}
exports.longestConsecutive = longestConsecutive;
;
