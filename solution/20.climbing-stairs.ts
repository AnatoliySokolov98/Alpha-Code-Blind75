export function climbStairs(n: number): number {
  let first = 1;
  let last = 0;
  for (let i = n - 1; i >=0; i--) {
      [first,last] = [first + last, first];
  }
  return first;
};