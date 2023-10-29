import canAttendMeetings from '../blind75/57.meeting-rooms';

describe('canAttendMeetings', () => {
  it('should return true for non-overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [4, 6],
      [7, 9],
    ];
    expect(canAttendMeetings(intervals)).toBe(true);
  });

  it('should return false for overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [5, 7],
    ];
    expect(canAttendMeetings(intervals)).toBe(false);
  });

  it('should return true for empty intervals', () => {
    const intervals: number[][] = [];
    expect(canAttendMeetings(intervals)).toBe(true);
  });

  it('should return true for a single interval', () => {
    const intervals = [[2, 5]];
    expect(canAttendMeetings(intervals)).toBe(true);
  });

  it('should return true for overlapping intervals with the same start and end times', () => {
    const intervals = [
      [1, 2],
      [1, 2],
      [2, 3],
    ];
    expect(canAttendMeetings(intervals)).toBe(false);
  });

  it('should return true for overlapping intervals with one having the same start time', () => {
    const intervals = [
      [1, 2],
      [1, 3],
      [2, 4],
    ];
    expect(canAttendMeetings(intervals)).toBe(false);
  });

  it('should return true for overlapping intervals with one having the same end time', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [2, 4],
    ];
    expect(canAttendMeetings(intervals)).toBe(false);
  });
});
