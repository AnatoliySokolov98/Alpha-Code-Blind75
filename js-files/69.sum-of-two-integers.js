"use strict";
function getSum(a, b) {
    if (a === 0)
        return b;
    if (b === 0)
        return a;
    if (a < 0 && b < 0) {
        return -1 * getSum(a * -1, b * -1);
    }
    if (a < 0) {
        if (Math.abs(a) > b)
            return -1 * (getSum(-a, -b));
    }
    if (b < 0) {
        if (Math.abs(b) > a)
            return -1 * (getSum(-b, -a));
    }
    const sum = (a, b) => {
        while (b) {
            [a, b] = [a ^ b, a & b];
            b = b << 1;
        }
        return a;
    };
    const difference = (a, b) => {
        while (b) {
            let borrow = (~a & b) << 1;
            a = a ^ b;
            b = borrow;
        }
        return a;
    };
    if (b < 0)
        return difference(a, -b);
    else
        return sum(a, b);
}
