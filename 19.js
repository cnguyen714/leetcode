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
  let it = head;
  let c = n;

  while(c > 0) {
    it = it.next;
    c--;
  }

  while(it) {
    it = it.next;
    prev = nth;
    nth = nth.next;
    // console.log(`${prev ? prev.val : null}:${nth.val} - ${it ? it.val : null}`)
  }


  if(prev) {
    if(nth) {
      prev.next = nth.next;
    } else {
      prev.next = null;
    }
  } else {
    if(nth) {
      head = nth.next;
    } else {
      head = null;
    }
  }



  return head;
};

let e = new ListNode(5);
let d = new ListNode(4,e);
let c = new ListNode(3,d);
let b = new ListNode(2,c);
let a = new ListNode(1,b);

let it = a;

// while(it != null) {
//   console.log(it.val);
//   it = it.next;
// }

it = removeNthFromEnd(d, 2);

while (it != null) {
  console.log(it.val);
  it = it.next;
}