// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let i = l1;
  let j = l2;
  let mergedRoot = null;
  let listPos = null;

  while (i != null && j != null) {
    if(i.val <= j.val) {
      if(mergedRoot === null) {
        mergedRoot = i;
        listPos = mergedRoot;
        i = i.next;
      } else {
        listPos.next = i;
        listPos = listPos.next;
        i = i.next;
      }
    } else {
      if (mergedRoot === null) {
        mergedRoot = j;
        listPos = mergedRoot;
        j = j.next;
      } else {
        listPos.next = j;
        listPos = listPos.next;
        j = j.next;
      }
    }
  }

  while (i != null || j != null) {
    if (j === null) {
      if (mergedRoot === null) {
        mergedRoot = i;
        listPos = mergedRoot;
        i = i.next;
      } else {
        listPos.next = i;
        listPos = listPos.next;
        i = i.next;
      }
    } else {
      if (mergedRoot === null) {
        mergedRoot = j;
        listPos = mergedRoot;
        j = j.next;
      } else {
        listPos.next = j;
        listPos = listPos.next;
        j = j.next;
      }
    }
  }
  return mergedRoot;
};
