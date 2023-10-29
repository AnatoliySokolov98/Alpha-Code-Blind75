export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for(let row = 1; row < dp.length; row++) {
      for(let col = 0; col < coins.length; col++) {
          const take = row - coins[col] < 0 ? Infinity : 1 + dp[row - coins[col]];
          dp[row] = Math.min(dp[row], take);
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};