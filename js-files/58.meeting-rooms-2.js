"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minMeetingRooms = void 0;
const priority_queue_1 = require("@datastructures-js/priority-queue");
function minMeetingRooms(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const pq = new priority_queue_1.MinPriorityQueue();
    pq.enqueue(intervals[0][1]);
    let rooms = 1;
    for (let i = 1; i < intervals.length; i++) {
        const earliestMeetingTimeEnd = pq.front();
        const [start, end] = intervals[i];
        if (start >= earliestMeetingTimeEnd) {
            pq.dequeue();
        }
        pq.enqueue(end);
        rooms = Math.max(rooms, pq.size());
    }
    return rooms;
}
exports.minMeetingRooms = minMeetingRooms;
;
