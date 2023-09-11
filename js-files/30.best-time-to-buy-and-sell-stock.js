"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProfit = void 0;
function maxProfit(prices) {
    let res = 0;
    let buy = Infinity;
    for (let i = 0; i < prices.length; i++) {
        res = Math.max(res, prices[i] - buy);
        buy = Math.min(buy, prices[i]);
    }
    return res;
}
exports.maxProfit = maxProfit;
;
