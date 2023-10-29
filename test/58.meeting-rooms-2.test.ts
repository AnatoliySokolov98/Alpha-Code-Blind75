import minMeetingRooms from '../blind75/58.meeting-rooms-2';

describe('minMeetingRooms', () => {
  it('should return the correct number of meeting rooms needed for non-overlapping intervals', () => {
    const intervals = [
      [0, 1],
      [2, 4],
      [5, 6],
    ];
    expect(minMeetingRooms(intervals)).toBe(1);
  });

  it('should return the correct number of meeting rooms needed for overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [4, 6],
    ];
    expect(minMeetingRooms(intervals)).toBe(2);
  });

  it('should return the correct number of meeting rooms needed for a single interval', () => {
    const intervals = [[1, 3]];
    expect(minMeetingRooms(intervals)).toBe(1);
  });
});
