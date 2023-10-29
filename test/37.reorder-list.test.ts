import reorderList from '../blind75/37.reorder-list';
import { ListNode } from './data-structures/linked-list';

// Helper function to convert a linked list to an array
function linkedListToArray(head: ListNode | null): number[] {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('reorderList', () => {
  it('Should reorder a linked list with even number of elements', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);

    reorderList(head);

    expect(linkedListToArray(head)).toEqual([1, 4, 2, 3]);
  });

  it('Should reorder a linked list with odd number of elements', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    reorderList(head);

    expect(linkedListToArray(head)).toEqual([1, 5, 2, 4, 3]);
  });

  it('Should handle an empty linked list', () => {
    const head = null;

    reorderList(head);

    expect(head).toBeNull();
  });

  it('Should handle a linked list with a single element', () => {
    const head = new ListNode(42);

    reorderList(head);

    expect(linkedListToArray(head)).toEqual([42]);
  });
});
