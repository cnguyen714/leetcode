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
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var mergeKLists = function (lists) {
  let root = null;

  let heap = new MinHeap();
  lists.map(head => {
    if (head) heap.push(head);
  });

  let next = null;
  let it = null;
  while ((next = heap.pop()) !== null) {
    if (root === null) {
      root = new ListNode(next);
      it = root;
    } else {
      it.next = new ListNode(next);
      it = it.next;
    }
  }

  return root;
};

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
    if(this.empty()) return null;

    let val = this.heap[1].val;
    this.heap[1] = this.heap[1].next;
    if(this.heap[1] === null) {
      this.heap[1] = this.heap.pop();
      if (this.heap[1] === null) {
        this.heap.pop();
        return val;
      }
    }

    this.siftDown(1);

    return val;
  };

  this.siftDown = function(i) {
    let left = this.getLeft(i);
    let right = this.getRight(i);
    while (left || right) {
      if (left && right) {
        if (this.heap[i].val <= this.heap[left].val && this.heap[i].val <= this.heap[right].val) return;
        if (this.heap[i].val > this.heap[left].val && this.heap[left].val <= this.heap[right].val) {
          this.swapNodes(i, left);
          i = left;
        } else {
          this.swapNodes(i, right);
          i = right;
        }
      } else {
        if (this.heap[i].val <= this.heap[left].val) {
          return;
        } else {
          this.swapNodes(i, left);
          i = left;
        }
      }

      left = this.getLeft(i);
      right = this.getRight(i);
    }
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

// let min = new MinHeap(new ListNode(1, new ListNode(4, new ListNode(5))));
// min.push(new ListNode(1, new ListNode(3, new ListNode(4))));
// min.push(new ListNode(2, new ListNode(6)));

let min = new MinHeap(new ListNode(0, new ListNode(2, new ListNode(5))));

let next = null;
let it = null;
while ((next = min.pop()) !== null) {
  console.log(next);
  console.log(min.heap);
}

// let lists = [
//   new ListNode(1, new ListNode(4, new ListNode(5))),
//   new ListNode(1, new ListNode(3, new ListNode(4))),
//   new ListNode(2, new ListNode(6))
// ];

// let list = mergeKLists(lists);

// console.log(list);