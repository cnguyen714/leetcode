// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let output = null;



};

function HeapNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function minHeap(node = null) {
  this.heap = [null];
  if(node !== null) this.heap.push(node);

  this.empty = function() {
    return this.heap.length === 1;
  }

  this.push = function(node) {

  };

  this.pop = function() {
    if(this.heap.length === 1) return null;

  };

  this.siftDown = function() {

  }

}