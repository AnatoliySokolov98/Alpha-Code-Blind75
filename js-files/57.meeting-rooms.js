"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canAttendMeetings = void 0;
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0])
            return false;
    }
    return true;
}
exports.canAttendMeetings = canAttendMeetings;
