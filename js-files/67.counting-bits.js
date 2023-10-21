"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits = void 0;
function countBits(n) {
    const res = [];
    for (let i = 0; i <= n; i++) {
        let num = i;
        let ones = 0;
        while (num) {
            ones += num & 1;
            num = num >>> 1;
        }
        res.push(ones);
    }
    return res;
}
exports.countBits = countBits;
;
