"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = exports.difference = exports.sum = void 0;
const sum = (a, b) => {
    while (b) {
        [a, b] = [a ^ b, (a & b) << 1];
    }
    return a;
};
exports.sum = sum;
const difference = (a, b) => {
    while (b) {
        [a, b] = [a ^ b, (~a & b) << 1];
    }
    return a;
};
exports.difference = difference;
function getSum(a, b) {
    if (a < 0) {
        if (b < 0) {
            return -(0, exports.sum)(-a, -b);
        }
        else if (b > -a) {
            return (0, exports.difference)(b, -a);
        }
        else {
            return -(0, exports.difference)(-a, b);
        }
    }
    if (b < 0) {
        if (a > -b) {
            return (0, exports.difference)(a, -b);
        }
        else {
            return -(0, exports.difference)(-b, a);
        }
    }
    return (0, exports.sum)(a, b);
}
exports.getSum = getSum;
