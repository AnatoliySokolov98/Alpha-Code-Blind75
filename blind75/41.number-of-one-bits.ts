export function hammingWeight(n: number): number {
  let res = 0;
  while (n) {
      res += n & 1;
      n >>>= 1;
  }
  return res;
};
