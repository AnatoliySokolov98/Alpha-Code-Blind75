"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCycle = void 0;
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next && slow) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return true;
    }
    return false;
}
exports.hasCycle = hasCycle;
;
