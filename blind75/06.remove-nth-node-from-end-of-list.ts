import {ListNode} from './data-structures/linked-list';

  export  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy, slow: ListNode | null = dummy;
  while ( n > 0){
    if(fast)
      fast = fast.next;
    n--;
  }

  while (fast && fast.next) {
    if(slow)
      slow = slow.next;
    fast = fast.next;
  }

  if(slow && slow.next)
    slow.next = slow.next.next;
  return dummy.next;
};
