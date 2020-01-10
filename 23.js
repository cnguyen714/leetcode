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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function HeapNode(head) {
  this.head = head;
}

function MinHeap(node = null) {
  this.heap = [null];
  if (node !== null) this.heap.push(node);

  this.empty = function() {
    return this.heap.length === 1;
  }

  this.push = function(listNode) {
    this.heap.push(listNode);
    this.siftUp(this.heap.length - 1);
  };

  this.pop = function() {
    if(this.heap.length === 1) return null;

  };

  this.siftDown = function(i) {

  }

  this.siftUp = function(i) {
    let parent = this.getParent(i);
    if (parent === 0) return;
    while (this.heap[i].val < this.heap[parent].val) {
      this.swapNodes(i, parent);
      i = parent;
      parent = this.getParent(i);
      if (parent === 0) return;
    }
  }

  this.swapNodes = function(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  };

  this.getParent = function(i) {
    return Math.floor(i/2);
  }

  this.getLeft = function(i) {
    return i * 2 < this.heap.length ? i * 2 : null;
  }
  this.getRight = function(i) {
    return i * 2 + 1 < this.heap.length ? i * 2 + 1 : null;
  }
}

let min = new MinHeap(new ListNode(5));
min.push(new ListNode(7));
min.push(new ListNode(3));
console.log(min.heap);