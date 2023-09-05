"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numDecodings = void 0;
function numDecodings(s) {
    const visited = {};
    const dp = (index) => {
        if (index === s.length)
            return 1;
        if (visited[index])
            return visited[index];
        let res = 0;
        if (s[index] !== '0')
            res += dp(index + 1);
        const doubleDigit = s.slice(index, index + 2);
        if (doubleDigit.length === 2 && doubleDigit >= '10' && doubleDigit <= '26')
            res += dp(index + 2);
        visited[index] = res;
        return res;
    };
    return dp(0);
}
exports.numDecodings = numDecodings;
;
