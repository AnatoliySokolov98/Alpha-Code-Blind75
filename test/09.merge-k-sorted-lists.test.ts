import mergeKLists from '../blind75/09.merge-k-sorted-lists';
import { ListNode } from './data-structures/linked-list';

describe('mergeKLists', () => {
  it('merges an array of empty lists into an empty list', () => {
    const lists: Array<ListNode | null> = [];
    const result = mergeKLists(lists);
    expect(result).toBeNull();
  });

  it('merges an array of one non-empty list into the same list', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    const lists: Array<ListNode | null> = [list1];
    const result = mergeKLists(lists);
    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(3);
    expect(result?.next?.next?.val).toBe(5);
    expect(result?.next?.next?.next).toBeNull();
  });

  it('merges an array of multiple lists', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);

    const list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);

    const list3 = new ListNode(0);
    list3.next = new ListNode(7);

    const lists: Array<ListNode | null> = [list1, list2, list3];
    const result = mergeKLists(lists);

    expect(result?.val).toBe(0);
    expect(result?.next?.val).toBe(1);
    expect(result?.next?.next?.val).toBe(2);
    expect(result?.next?.next?.next?.val).toBe(3);
    expect(result?.next?.next?.next?.next?.val).toBe(4);
    expect(result?.next?.next?.next?.next?.next?.val).toBe(5);
    expect(result?.next?.next?.next?.next?.next?.next?.val).toBe(6);
    expect(result?.next?.next?.next?.next?.next?.next?.next?.val).toBe(7);
    expect(result?.next?.next?.next?.next?.next?.next?.next?.next).toBeNull();
  });
});
