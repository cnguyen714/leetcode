//https://leetcode.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null) return null;
  let right = head;
  let left = head.next;

  if (left === null) return head;
  head = left;

  let next = left.next;
  right.next = next;
  left.next = right;
  let prev = right;

  while (next != null) {
    right = next;
    left = right.next;
    if (left === null) return head;
    prev.next = left;
    next = left.next;
    right.next = next;
    left.next = right;
    prev = right;
  }

  return head;
};