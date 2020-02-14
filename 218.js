// https://leetcode.com/problems/the-skyline-problem/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */


// Use a heap to keep track of tallest buildings
var getSkyline = function (buildings) {
  if(buildings.length === 0) return [[0,0]];
  let runningBuildings = [buildings[0]];

  let h = runningBuildings[0][2];
  let x = runningBuildings[0][0];
  let skyline = [[x, h]];

  for (let i = 1; i < buildings.length; i++) {
    let building = buildings[i];
    if (building[0] === skyline[skyline.length - 1][0] && building > h) {
      h = building[2];
      skyline[skyline.length - 1][1] = h;
    } else if (building[2] >)

    for (let j = 0; j < runningBuildings.length; j++) {
      if()
    }
    runningBuildings.push(building);
  }



};

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function MinHeap(node = null) {
  this.heap = [null];
  if (node !== null) this.heap.push(node);

  this.empty = function () {
    return this.heap.length === 1;
  }

  this.push = function (listNode) {
    this.heap.push(listNode);
    this.siftUp(this.heap.length - 1);
  };

  this.pop = function () {
    if (this.empty()) return null;

    let val = this.heap[1].val;
    this.heap[1] = this.heap[1].next;
    if (this.heap[1] === null) {
      this.heap[1] = this.heap.pop();
      if (this.heap[1] === null) {
        this.heap.pop();
        return val;
      }
    }

    this.siftDown(1);

    return val;
  };

  this.siftDown = function (i) {
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

  this.siftUp = function (i) {
    let parent = this.getParent(i);
    if (parent === 0) return;
    while (this.heap[i].val < this.heap[parent].val) {
      this.swapNodes(i, parent);
      i = parent;
      parent = this.getParent(i);
      if (parent === 0) return;
    }
  }

  this.swapNodes = function (i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  };

  this.getParent = function (i) {
    return Math.floor(i / 2);
  }

  this.getLeft = function (i) {
    return i * 2 < this.heap.length ? i * 2 : null;
  }
  this.getRight = function (i) {
    return i * 2 + 1 < this.heap.length ? i * 2 + 1 : null;
  }
}