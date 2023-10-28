"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTwoLists = void 0;
const linked_list_1 = require("./data-structures/linked-list");
function mergeTwoLists(list1, list2) {
    const dummy = new linked_list_1.ListNode();
    let curr = dummy;
    while (list1 || list2) {
        if (!list1) {
            curr.next = list2;
            break;
        }
        if (!list2) {
            curr.next = list1;
            break;
        }
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
            curr = curr.next;
            curr.next = null;
        }
        else {
            curr.next = list2;
            list2 = list2.next;
            curr = curr.next;
            curr.next = null;
        }
    }
    return dummy.next;
}
exports.mergeTwoLists = mergeTwoLists;
;
