"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topKFrequent = void 0;
function topKFrequent(nums, k) {
    const counts = {};
    for (let el of nums) {
        counts[el] = (counts[el] || 0) + 1;
    }
    const buckets = {};
    for (let key in counts) {
        const val = counts[key];
        buckets[val] = buckets[val] ?? [];
        buckets[val].push(Number(key));
    }
    const res = [];
    let choice = nums.length;
    while (k) {
        if (buckets[choice]) {
            for (let el of buckets[choice]) {
                res.push(el);
                k--;
            }
        }
        choice--;
    }
    return res;
}
exports.topKFrequent = topKFrequent;
;
