"use strict";
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let curr_interval = intervals[0];
    const res = [];
    for (let i = 1; i < intervals.length; i++) {
        if (curr_interval[1] >= intervals[i][0]) {
            curr_interval = [curr_interval[0], Math.max(curr_interval[1], intervals[i][1])];
        }
        else {
            res.push(curr_interval.slice());
            curr_interval = intervals[i];
        }
    }
    res.push(curr_interval.slice());
    return res;
}
;
