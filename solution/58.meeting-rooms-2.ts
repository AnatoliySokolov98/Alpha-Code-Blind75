import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function minMeetingRooms(intervals: number[][]): number {

  intervals.sort((a, b) => a[0] - b[0]);
  const pq = new MinPriorityQueue<number>();

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
};

