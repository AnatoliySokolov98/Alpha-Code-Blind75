import { ListNode } from "./data-structures/linked-list";

export function reverseList(head: ListNode | null): ListNode | null {
  let p: ListNode | null = null;
  while (head) {
      let t: ListNode | null = head.next;
      head.next = p;
      p = head;
      head = t;
  }
  return p;
};