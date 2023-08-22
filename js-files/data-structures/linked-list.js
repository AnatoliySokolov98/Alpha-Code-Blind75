"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
