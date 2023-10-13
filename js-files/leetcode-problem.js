"use strict";
function alienOrder(words) {
    const letters = {};
    const uniques = new Set();
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length)
                break;
            const [firstLetter, secondLetter] = [words[i][j], words[i + 1][j]];
            letters[firstLetter] = letters[firstLetter] ?? [new Set(), 0];
            if (letters[firstLetter][0].has(secondLetter)) {
                continue;
            }
            else {
                uniques.add(firstLetter);
                uniques.add(secondLetter);
                letters[firstLetter][0].add(secondLetter);
                letters[secondLetter] = letters[secondLetter] ?? [new Set(), 0];
                letters[secondLetter][1]++;
            }
        }
    }
    const res = [];
    const avail = [];
    Object.entries(letters).forEach((entry) => {
        if (entry[1][1] === 0) {
            avail.push(entry[0]);
        }
    });
    console.log(letters);
    console.log(avail);
    while (avail.length) {
        console.log(avail);
        const letter = avail.pop();
        if (res.includes(letter))
            continue;
        res.push(letter);
        if (Object.hasOwn(letters, letter)) {
            for (let child of letters[letter][0]) {
                letters[child][1]--;
                if (letters[child][1] === 0)
                    avail.push(child);
            }
        }
    }
    console.log(res);
    if (res.length === uniques.size)
        return res.join('');
    return '';
}
;
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words));
