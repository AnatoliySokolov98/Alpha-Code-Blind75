"use strict";
function longestPalindrome(s) {
    let resLeft = 0, resRight = 0;
    function buildPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            if (resRight - resLeft < right - left) {
                resRight = right;
                resLeft = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        buildPalindrome(i, i);
        buildPalindrome(i, i - 1);
    }
    return s.slice(resLeft, resRight + 1);
}
;
