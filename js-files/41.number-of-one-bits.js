"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hammingWeight = void 0;
function hammingWeight(n) {
    let res = 0;
    while (n) {
        res += n & 1;
        n >>>= 1;
    }
    return res;
}
exports.hammingWeight = hammingWeight;
;
