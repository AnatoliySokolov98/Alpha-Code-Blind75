"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairs = void 0;
function climbStairs(n) {
    let first = 1;
    let last = 0;
    for (let i = n - 1; i >= 0; i--) {
        [first, last] = [first + last, first];
    }
    return first;
}
exports.climbStairs = climbStairs;
;
