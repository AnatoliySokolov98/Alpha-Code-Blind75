"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alienOrder = void 0;
function alienOrder(words) {
    const letters = {};
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!Object.hasOwn(letters, words[i][j]))
                letters[words[i][j]] = [new Set(), 0];
        }
    }
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length)
                return '';
            const [firstLetter, secondLetter] = [words[i][j], words[i + 1][j]];
            if (firstLetter === secondLetter)
                continue;
            if (!letters[firstLetter][0].has(secondLetter)) {
                letters[firstLetter][0].add(secondLetter);
                letters[secondLetter][1]++;
            }
            break;
        }
    }
    const res = [];
    const uniques = new Set();
    const avail = [];
    Object.entries(letters).forEach((entry) => {
        if (entry[1][1] === 0) {
            avail.push(entry[0]);
        }
    });
    while (avail.length) {
        const letter = avail.pop();
        if (uniques.has(letter))
            continue;
        res.push(letter);
        uniques.add(letter);
        if (Object.hasOwn(letters, letter)) {
            for (let child of letters[letter][0]) {
                letters[child][1]--;
                if (letters[child][1] === 0)
                    avail.push(child);
            }
        }
    }
    if (res.length === Object.keys(letters).length)
        return res.join('');
    return '';
}
exports.alienOrder = alienOrder;
;
