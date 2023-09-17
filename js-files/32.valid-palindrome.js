"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(s) {
    s = s.trim().toLowerCase();
    const chars = new Set('abcdefghijklmnopqrstuvwxyz1234567890');
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (!chars.has(s[left]))
            left++;
        else if (!chars.has(s[right]))
            right--;
        else if (s[left] !== s[right])
            return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}
exports.isPalindrome = isPalindrome;
;
