// Definition for singly-linked list.
import {ListNode} from './data-structures/linked-list';
import{mergeTwoLists} from './08.merge-two-sorted-lists';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let interval = 1;
  while (interval < lists.length) {
    for(let i = 0; i < lists.length - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
      lists[i + interval] = null;
    }
    interval *=2;
  }
  return lists.length > 0 ? lists[0] : null;
};


