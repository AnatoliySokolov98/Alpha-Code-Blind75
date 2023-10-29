import reverseList from '../blind75/44.reverse-linked-list';
import { ListNode } from './data-structures/linked-list';

describe('reverseList', () => {
  it('should reverse an empty list', () => {
    expect(reverseList(null)).toBe(null);
  });

  it('should reverse a single node list', () => {
    const head = new ListNode(1);
    const reversed = reverseList(head);
    expect(reversed).toEqual(head);
  });

  it('should reverse a list with multiple nodes', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    const reversed = reverseList(head);

    expect(reversed!.val).toBe(3);
    expect(reversed!.next!.val).toBe(2);
    expect(reversed!.next!.next!.val).toBe(1);
    expect(reversed!.next!.next!.next).toBe(null);
  });

  it('should handle a large list', () => {
    const size = 1000;
    const head = new ListNode(1);
    let current = head;

    for (let i = 2; i <= size; i++) {
      current.next = new ListNode(i);
      current = current.next;
    }

    const reversed = reverseList(head);
    let i = size;
    let temp = reversed;

    while (temp) {
      expect(temp.val).toBe(i);
      temp = temp.next;
      i--;
    }
  });
});
