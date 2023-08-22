"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
function lengthOfLongestSubstring(s) {
    const letters = new Set();
    let res = 0, l = 0;
    for (let r = 0; r < s.length; r++) {
        while (letters.has(s[r])) {
            letters.delete(s[l]);
            l++;
        }
        letters.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
;
