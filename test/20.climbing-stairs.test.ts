import climbStairs from '../blind75/20.climbing-stairs';

describe('climbStairs', () => {
  it('returns the number of ways to climb 1 stair', () => {
    const n = 1;
    const result = climbStairs(n);
    expect(result).toBe(1);
  });

  it('returns the number of ways to climb 2 stairs', () => {
    const n = 2;
    const result = climbStairs(n);
    expect(result).toBe(2);
  });

  it('returns the number of ways to climb 3 stairs', () => {
    const n = 3;
    const result = climbStairs(n);
    expect(result).toBe(3);
  });

  it('returns the number of ways to climb 4 stairs', () => {
    const n = 4;
    const result = climbStairs(n);
    expect(result).toBe(5);
  });

  it('returns the number of ways to climb 10 stairs', () => {
    const n = 10;
    const result = climbStairs(n);
    expect(result).toBe(89);
  });
});
