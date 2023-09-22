export function reverseBits(n: number): number {
	let res = 0;
    for(let i = 0; i < 32; i ++) {
        res *= 2;
        res += n % 2;
        n >>= n;
    }
    return res;
};    