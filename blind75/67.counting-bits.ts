export function countBits(n: number): number[] {
  const res: number[] = [];
  for (let i = 0; i <= n; i++) {
      let num = i;
      let ones = 0;
      while(num) {
          ones += num & 1;
          num = num >>> 1;
      }
      res.push(ones);
  }
  return res;
};