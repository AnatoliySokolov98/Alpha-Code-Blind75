"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
function encode(strs) {
    const res = [];
    for (let i = 0; i < strs.length; i++) {
        res.push(`${strs[i].length}#`);
        res.push(strs[i]);
    }
    return res.join('');
}
exports.encode = encode;
;
function decode(s) {
    const res = [];
    let curr = 0;
    while (curr < s.length) {
        const start = curr;
        while (s[curr] !== '#') {
            curr++;
        }
        const decodeLength = Number(s.slice(start, curr));
        curr++;
        res.push(s.slice(curr, curr + decodeLength));
        curr += decodeLength;
    }
    return res;
}
exports.decode = decode;
;
