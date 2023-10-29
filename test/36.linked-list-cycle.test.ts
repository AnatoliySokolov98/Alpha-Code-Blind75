import hasCycle from '../blind75/36.linked-list-cycle';
import { ListNode } from './data-structures/linked-list';

describe('hasCycle', () => {
  it('should return false for an empty list', () => {
    const head = null;
    expect(hasCycle(head)).toBe(false);
  });

  it('should return false for a list with no cycle', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    expect(hasCycle(head)).toBe(false);
  });

  it('should return true for a list with a cycle', () => {
    const head = new ListNode(1);
    const node2 = new ListNode(2);
    head.next = node2;
    const node3 = new ListNode(3);
    node2.next = node3;
    node3.next = node2;
    expect(hasCycle(head)).toBe(true);
  });

  it('should return true for a list with a self-cycle', () => {
    const head = new ListNode(1);
    head.next = head;
    expect(hasCycle(head)).toBe(true);
  });
});
