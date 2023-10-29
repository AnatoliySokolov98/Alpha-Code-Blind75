import maxProfit from '../blind75/30.best-time-to-buy-and-sell-stock';

describe('maxProfit', () => {
  it('should return 0 for an empty array', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('should return 0 if it is not possible to make a profit', () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  it('should return the maximum profit possible', () => {
    const prices1 = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices1)).toBe(5);

    const prices2 = [7, 6, 4, 3, 1, 8];
    expect(maxProfit(prices2)).toBe(7);

    const prices3 = [3, 2, 6, 5, 0, 3];
    expect(maxProfit(prices3)).toBe(4);

    const prices4 = [1, 2, 3, 4, 5];
    expect(maxProfit(prices4)).toBe(4);
  });
});
