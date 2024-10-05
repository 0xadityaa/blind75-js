const { reverseList } = require("../solutions/reverse-linked-list");

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = null;
  let current = null;

  for (const val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

test("should reverse a linked list with multiple elements", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
});

test("should reverse a linked list with a single element", () => {
  const head = createLinkedList([1]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([1]);
});

test("should return null for an empty linked list", () => {
  const head = null;
  const reversed = reverseList(head);
  expect(reversed).toBeNull();
});

test("should reverse a linked list with two elements", () => {
  const head = createLinkedList([1, 2]);
  const reversed = reverseList(head);
  expect(linkedListToArray(reversed)).toEqual([2, 1]);
});
