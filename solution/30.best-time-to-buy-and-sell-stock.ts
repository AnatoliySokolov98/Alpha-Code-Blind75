export function maxProfit(prices: number[]): number {
  let res = 0;
  let buy = Infinity;
  for(let i = 0; i < prices.length; i++) {
      res = Math.max(res, prices[i] - buy);
      buy = Math.min(buy, prices[i]);
  }
  return res;
};
