"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eraseOverlapIntervals = void 0;
function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let curr = -Infinity;
    let res = 0;
    for (const [start, end] of intervals) {
        if (start < curr) {
            curr = Math.min(curr, end);
            res++;
        }
        else {
            curr = end;
        }
    }
    return res;
}
exports.eraseOverlapIntervals = eraseOverlapIntervals;
;
