import removeNthFromEnd from '../blind75/06.remove-nth-node-from-end-of-list';
import { ListNode } from './data-structures/linked-list';

describe('removeNthFromEnd', () => {
  it('removes the nth node from the end of the list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const n = 2;
    const result = removeNthFromEnd(head, n);

    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(3);
    expect(result?.next?.next?.next?.val).toBe(5);
    expect(result?.next?.next?.next?.next).toBeNull();
  });

  it('removes the only node when the list has one node', () => {
    const head = new ListNode(1);

    const n = 1;
    const result = removeNthFromEnd(head, n);

    expect(result).toBeNull();
  });

  it('returns null when the list is empty', () => {
    const head = null; 

    const n = 1;
    const result = removeNthFromEnd(head, n);

    expect(result).toBeNull();
  });
});
