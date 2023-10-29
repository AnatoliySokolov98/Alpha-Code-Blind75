import { ListNode } from "./data-structures/linked-list";

export function reorderList(head: ListNode | null): void {
  let slow: ListNode |null = head
  let fast: ListNode | null = head ? head.next : null;
  while(fast && fast.next && slow) {
      fast = fast.next.next;
      slow = slow.next;
  }

  let prev: ListNode |null = null, current: ListNode |null = slow ? slow.next : null;
  if(slow)
   slow.next = null;
  while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
  }
  let dummy = new ListNode(0);
  current = dummy;
  let first = head, second = prev;
  while(first || second) {
      if(first) {
          current.next = first;
          first = first.next;
          current = current.next;
      }
      if(second) {
          current.next = second;
          second = second.next
          current = current.next;
      }
  }
};