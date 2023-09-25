"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorderList = void 0;
const linked_list_1 = require("./data-structures/linked-list");
function reorderList(head) {
    let slow = head;
    let fast = head ? head.next : null;
    while (fast && fast.next && slow) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let prev = null, current = slow ? slow.next : null;
    if (slow)
        slow.next = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let dummy = new linked_list_1.ListNode(0);
    current = dummy;
    let first = head, second = prev;
    while (first || second) {
        if (first) {
            current.next = first;
            first = first.next;
            current = current.next;
        }
        if (second) {
            current.next = second;
            second = second.next;
            current = current.next;
        }
    }
}
exports.reorderList = reorderList;
;
