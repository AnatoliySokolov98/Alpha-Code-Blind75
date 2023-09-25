"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseBits = void 0;
function reverseBits(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res *= 2;
        res += n % 2;
        n >>= n;
    }
    return res;
}
exports.reverseBits = reverseBits;
;
