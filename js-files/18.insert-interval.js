"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = void 0;
function insert(intervals, newInterval) {
    const res = [];
    for (let i = 0; i < intervals.length; i++) {
        const [insert_first, insert_last] = newInterval;
        const [first, last] = intervals[i];
        if (insert_last < first) {
            return [...res, newInterval, ...intervals.slice(i)];
        }
        if (insert_first > last) {
            res.push(intervals[i]);
        }
        else {
            newInterval = [Math.min(first, insert_first), Math.max(last, insert_last)];
        }
    }
    res.push(newInterval);
    return res;
}
exports.insert = insert;
;
