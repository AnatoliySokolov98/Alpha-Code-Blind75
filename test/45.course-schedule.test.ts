import canFinish from '../blind75/45.course-schedule';

describe('canFinish', () => {
  it('should return true for an empty course list', () => {
    const numCourses = 0;
    const prerequisites: number[][] = [];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it('should return true for a single course with no prerequisites', () => {
    const numCourses = 1;
    const prerequisites: number[][] = [];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it('should return true for courses with independent prerequisites', () => {
    const numCourses = 4;
    const prerequisites: number[][] = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it('should return false for circular prerequisites', () => {
    const numCourses = 2;
    const prerequisites: number[][] = [
      [1, 0],
      [0, 1],
    ];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });

  it('should return true for a large set of courses with no prerequisites', () => {
    const numCourses = 100;
    const prerequisites: number[][] = [];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });
});
