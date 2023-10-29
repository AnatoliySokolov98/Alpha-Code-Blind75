import coinChange from '../blind75/65.coin-change';

describe('coinChange', () => {
  it('should return the minimum number of coins for a simple case', () => {
    const coins = [1, 2, 5];
    const amount = 11;
    expect(coinChange(coins, amount)).toBe(3);
  });

  it('should return -1 for an impossible amount', () => {
    const coins = [2];
    const amount = 7;
    expect(coinChange(coins, amount)).toBe(-1);
  });

  it('should return 0 for an amount of 0', () => {
    const coins = [1, 2, 5];
    const amount = 0;
    expect(coinChange(coins, amount)).toBe(0);
  });

  it('should handle a case with only one type of coin', () => {
    const coins = [3];
    const amount = 9;
    expect(coinChange(coins, amount)).toBe(3);
  });

  it('should return the minimum number of coins for a large amount', () => {
    const coins = [186, 419, 83, 408];
    const amount = 6249;
    expect(coinChange(coins, amount)).toBe(20);
  });

  it('should handle an empty array of coins', () => {
    const coins: number[] = [];
    const amount = 10;
    expect(coinChange(coins, amount)).toBe(-1);
  });
});
