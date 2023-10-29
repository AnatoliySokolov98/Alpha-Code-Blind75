import { ListNode } from "./data-structures/linked-list";

export function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;

  while ( fast && fast.next && slow) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast)
          return true;
  }
  return false;
};