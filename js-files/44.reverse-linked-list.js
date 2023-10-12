"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseList = void 0;
function reverseList(head) {
    let p = null;
    while (head) {
        [head.next, p, head] = [p, head, head.next];
    }
    return p;
}
exports.reverseList = reverseList;
;
