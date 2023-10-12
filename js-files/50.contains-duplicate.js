"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsDuplicate = void 0;
function containsDuplicate(nums) {
    const uniques = new Set();
    for (let num of nums) {
        if (uniques.has(num))
            return true;
        uniques.add(num);
    }
    return false;
}
exports.containsDuplicate = containsDuplicate;
;
