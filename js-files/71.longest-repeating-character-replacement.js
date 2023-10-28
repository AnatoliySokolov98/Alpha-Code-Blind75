"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterReplacement = void 0;
function characterReplacement(s, k) {
    let left = 0;
    let res = 0;
    let maxLetterCount = 0;
    let maxLetter = '';
    const letters = {};
    for (let right = 0; right < s.length; right++) {
        letters[s[right]] = (letters[s[right]] || 0) + 1;
        if (letters[s[right]] > maxLetterCount) {
            maxLetter = s[right];
            maxLetterCount = letters[s[right]];
        }
        while (right - left + 1 - maxLetterCount > k) {
            letters[s[left]]--;
            if (letters[s[left]] === 0) {
                delete letters[s[left]];
            }
            if (s[left] === maxLetter) {
                maxLetter = Object.entries(letters).reduce((acc, [key, value]) => (!acc || letters[acc] < value) ? key : acc, '');
                maxLetterCount = letters[maxLetter];
            }
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
}
exports.characterReplacement = characterReplacement;
;
