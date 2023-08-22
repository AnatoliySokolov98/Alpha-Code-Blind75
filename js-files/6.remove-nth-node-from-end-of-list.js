"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNthFromEnd = void 0;
const linked_list_1 = require("./data-structures/linked-list");
function removeNthFromEnd(head, n) {
    const dummy = new linked_list_1.ListNode(0, head);
    let fast = dummy, slow = dummy;
    while (n > 0) {
        if (fast)
            fast = fast.next;
        n--;
    }
    while (fast && fast.next) {
        if (slow)
            slow = slow.next;
        fast = fast.next;
    }
    if (slow && slow.next)
        slow.next = slow.next.next;
    return dummy.next;
}
exports.removeNthFromEnd = removeNthFromEnd;
;
