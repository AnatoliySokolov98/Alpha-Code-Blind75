"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagrams = void 0;
function groupAnagrams(strs) {
    const cache = {};
    strs.forEach((str) => {
        const sortedString = str.split('').sort().join('');
        cache[sortedString] = cache[sortedString] ?? [];
        cache[sortedString].push(str);
    });
    return Object.values(cache);
}
exports.groupAnagrams = groupAnagrams;
;
