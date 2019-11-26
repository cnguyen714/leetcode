//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, node = null) {
  this.val = val;
  this.next = node;
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
  let it = null;

  while(n > 0) {
    it = it.next;
    n--;
  }

  while(it != null) {
    it = it.next;
    prev = nth;
    nth = nth.next;
  }

  if(it === head) {
    head = it.next;
  } else {
    prev.next = next;
  }

  return head;
};

let e = new Node(5);
let d = new Node(4,e);
let c = new Node(3,d);
let b = new Node(2,c);
let a = new Node(1,b);

let it = a;

while(it != null) {
  console.log(it.val);
  it = it.next;
}