import mergeTwoLists from '../blind75/08.merge-two-sorted-lists';
import { ListNode } from './data-structures/linked-list';

describe('mergeTwoLists', () => {
  it('merges two empty lists into an empty list', () => {
    const list1: ListNode | null = null;
    const list2: ListNode | null = null;
    const result = mergeTwoLists(list1, list2);
    expect(result).toBeNull();
  });

  it('merges an empty list with a non-empty list', () => {
    const list1: ListNode | null = null;
    const list2 = new ListNode(1);
    const result = mergeTwoLists(list1, list2);
    expect(result?.val).toBe(1);
    expect(result?.next).toBeNull();
  });

  it('merges two non-empty lists', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    const result = mergeTwoLists(list1, list2);

    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(3);
    expect(result?.next?.next?.next?.val).toBe(4);
    expect(result?.next?.next?.next?.next?.val).toBe(5);
    expect(result?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(result?.next?.next?.next?.next?.next?.next).toBeNull();
  });
});
