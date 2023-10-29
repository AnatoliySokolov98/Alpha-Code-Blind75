export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = -Infinity;
  let res = 0;
  for(const[start, end] of intervals) {
      if(start < curr) {
          curr = Math.min(curr, end);
          res++;
      }
      else{
          curr = end;
      }
  }
  return res;
};