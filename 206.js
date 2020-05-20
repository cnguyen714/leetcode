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
  if (!head) return head;
  // let stack = [];

  // let it = head;
  // while(it) {
  //   stack.push(it);
  //   it = it.next;
  // }

  // head = stack.pop();
  // it = head;

  // while(stack.length > 0) {
  //   it.next = stack.pop();
  //   it = it.next;
  // }
  // it.next = null;

  // return head;

  let prev = head;
  let it = head.next;
  let next;
  prev.next = null;
  while (it) {
    next = it.next;
    it.next = prev;
    prev = it;
    it = next;
  }
  head = prev;

  return head;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
head = reverseList(head);
let it = head;
while(it) {
  console.log(it.val);
  it = it.next;
}