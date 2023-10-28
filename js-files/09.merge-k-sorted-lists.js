"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeKLists = void 0;
const _08_merge_two_sorted_lists_1 = require("./08.merge-two-sorted-lists");
function mergeKLists(lists) {
    let interval = 1;
    while (interval < lists.length) {
        for (let i = 0; i < lists.length - interval; i += interval * 2) {
            lists[i] = (0, _08_merge_two_sorted_lists_1.mergeTwoLists)(lists[i], lists[i + interval]);
            lists[i + interval] = null;
        }
        interval *= 2;
    }
    return lists.length > 0 ? lists[0] : null;
}
exports.mergeKLists = mergeKLists;
;
