/**
 * Encodes a list of strings to a single string.
 */
export function encode(strs: string[]): string {
	const res = [];
    for (let i = 0; i < strs.length; i ++) {
        res.push(`${strs[i].length}#`);
        res.push(strs[i]);
    }
    return res.join('');
};

/**
 * Decodes a single string to a list of strings.
 */
export function decode(s: string): string[] {
	const res = [];
    let curr = 0;
    while (curr < s.length) {
        const start = curr;
        while (s[curr] !== '#') {
            curr++;
        }
        const decodeLength = Number(s.slice(start,curr));
        curr++;
        res.push(s.slice(curr, curr+ decodeLength));
        curr += decodeLength;
    }
    return res;
};

