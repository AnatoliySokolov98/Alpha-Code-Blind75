import { ListNode } from "./data-structures/linked-list";

export function reverseList(head: ListNode | null): ListNode | null {
  let p: ListNode | null = null;
  while (head) {
    [head.next, p, head] = [p, head, head.next];
  }
  return p;
};

