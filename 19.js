//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

//====

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nth = head;
  let prev = null;
  let it = head;

  while(n > 0) {
    it = it.next;
    n--;
  }

  while(it != null) {
    it = it.next;
    prev = nth;
    nth = nth.next;
  }



};