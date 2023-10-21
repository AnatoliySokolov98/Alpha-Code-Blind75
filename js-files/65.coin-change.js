"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinChange = void 0;
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let row = 1; row < dp.length; row++) {
        for (let col = 0; col < coins.length; col++) {
            const take = row - coins[col] < 0 ? Infinity : 1 + dp[row - coins[col]];
            dp[row] = Math.min(dp[row], take);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
exports.coinChange = coinChange;
;
