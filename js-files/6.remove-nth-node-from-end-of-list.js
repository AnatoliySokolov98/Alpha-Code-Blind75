"use strict";
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
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
;
