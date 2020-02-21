// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
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

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var reverseList = function (head) {

};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

let it = head;

while(it) {
  console.log(it.val);
  it = it.next;
}