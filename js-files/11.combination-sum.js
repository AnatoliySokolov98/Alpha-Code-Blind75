"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinationSum = void 0;
function combinationSum(candidates, target) {
    const cache = {};
    const cacheKey = (index, target) => `${index}-${target}`;
    candidates.sort((a, b) => a - b);
    const dp = (index, target) => {
        const key = cacheKey(index, target);
        if (key in cache) {
            return cache[key];
        }
        if (index === candidates.length || candidates[index] > target) {
            return [];
        }
        if (candidates[index] === target) {
            return [[target]];
        }
        let res = [];
        let dpRes = dp(index, target - candidates[index]);
        for (let item of dpRes) {
            res.push(item.concat(candidates[index]));
        }
        dpRes = dp(index + 1, target);
        for (let item of dpRes) {
            res.push(item.slice());
        }
        cache[key] = res;
        return res;
    };
    return dp(0, target);
}
exports.combinationSum = combinationSum;
console.log(combinationSum([1, 2, 3], 3));
