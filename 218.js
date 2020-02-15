// https://leetcode.com/problems/the-skyline-problem/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// Use a heap to keep track of tallest buildings
var getSkyline = function (buildings) {
  if(buildings.length === 0) return [];

  let maxHeap = new MaxHeap();
  let skyline = [];
  let max;
  let x;

  /*
    add buildings to heap to keep track of tallest building
    iterate through buildings
    if new building is out of range of the current tallest
      ""
      find next tallest building that extends farther than tallest in the heap
        if a building in the heap doesn't extend past the tallest, discard it
        if it extends, set it as the tallest and repeat until its in range or there are no other buildings
      ""
    if there are no other tallest, set skyline to the next iterated building
    if there are no other buildings to iterate, repeat heap crunch
      """
    return skyline
  */

  for (let i = 0; i < buildings.length; i++) {
    max = maxHeap.peek();
    // if there are currently no buildings, the next building is the tallest
    if (max === null) {
      max = buildings[i];
      maxHeap.push(new BuildingNode(max[2], max));
      skyline.push([max[0], max[2]]);
      continue;
    }

    let next = buildings[i];

    if (next[0] === max[0]) {
      if (next[2] > max[2]) {
        max = next;
        skyline[skyline.length - 1][1] = max[2];
        maxHeap.push(new BuildingNode(max[2], max));
      } else if (next[1] > max[1]) { // if not tallest, add to heap if extends
        if (next[1] > max[1]) maxHeap.push(new BuildingNode(next[2], next));
      }
      continue;
    }
    
    // if building is in range, and is taller than tallest, set skyline
    if (next[0] <= max[1]) {
      if (next[2] > max[2]) {
        max = next;
        skyline.push([max[0], max[2]]);
        maxHeap.push(new BuildingNode(max[2], max));
      } else if (next[1] > max[1]) { // if not tallest, add to heap if extends
        if (next[2] === max[2]) {
          maxHeap.peek()[1] = next[1];
        }
        maxHeap.push(new BuildingNode(next[2], next));
      }
      continue;
    }
    
    // if not in range, find the next tallest that extends past the current tallest
    let prevMax;
    crunch:
    while (next[0] > max[1]) {
      if (!prevMax) prevMax = maxHeap.pop();
      max = maxHeap.peek();

      // if heap is empty, drop skyline and move to the next building
      if (max === null) {
        skyline.push([prevMax[1], 0]);

        max = next;
        maxHeap.push(new BuildingNode(max[2], max));
        skyline.push([max[0], max[2]]);
        break crunch;
      }

      // if new max extends farther than current x position, set it as the new max
      if (prevMax[1] < max[1]) {
        // only push skyline if its a lesser height
        if (max[2] !== prevMax[2]) skyline.push([prevMax[1], max[2]]);
        prevMax = max;
        maxHeap.push(new BuildingNode(prevMax[2], prevMax));
        i--;
        break crunch;
      } else {
        // otherwise, retain prevMax and discard max
        maxHeap.pop();
      }
    }
  }

  if (maxHeap.peek() !== null) {
    let prevMax;
    crunch2:
    while (true) {
      if (!prevMax) prevMax = maxHeap.pop();
      max = maxHeap.peek();

      // if heap is empty, terminate skyline
      if (max === null) {
        skyline.push([prevMax[1], 0]);
        break crunch2;
      }

      // if new max extends farther than current x position, set it as the new max
      if (prevMax[1] < max[1]) {
        // only push skyline if its a lesser height
        if (max[2] !== prevMax[2]) skyline.push([prevMax[1], max[2]]);
        prevMax = max;
        maxHeap.pop();
      } else {
        // otherwise, retain prevMax and discard max
        maxHeap.pop();
      }
    }
  }

  return skyline;
};

function BuildingNode(height, building = null) {
  this.val = height;
  this.building = building;
}

function MaxHeap(node = null) {
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

    let building = this.heap[1].building;
    this.swapNodes(1, this.heap.length - 1);
    this.heap.pop();
    this.siftDown(1);

    return building;
  };

  this.peek = function () {
    return this.heap[1] ? this.heap[1].building : null;
  }

  this.siftDown = function (i) {
    let left = this.getLeft(i);
    let right = this.getRight(i);
    while (left || right) {
      if (left && right) {
        if (this.heap[i].val >= this.heap[left].val && this.heap[i].val >= this.heap[right].val) return;
        if (this.heap[i].val < this.heap[left].val && this.heap[left].val >= this.heap[right].val) {
          this.swapNodes(i, left);
          i = left;
        } else {
          this.swapNodes(i, right);
          i = right;
        }
      } else {
        if (this.heap[i].val >= this.heap[left].val) {
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
    while (this.heap[i].val > this.heap[parent].val) {
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

// let maxHeap = new MaxHeap(new BuildingNode(3, [0, 3, 3]));
// maxHeap.push(new BuildingNode(5, [0, 4, 5]));
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());
// console.log(maxHeap.peek());

// console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]));
// >> [ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]
// console.log(getSkyline([[0, 2, 3], [2, 5, 3]]));
// >> [[0,3],[5,0]]
// console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]]));
// >> [[1,3],[2,0]]
// console.log(getSkyline([[0, 2, 3], [2, 4, 3], [4, 6, 3]]));
// >> [[1,3],[2,0]]
// console.log(getSkyline([[0, 5, 7], [5, 10, 7], [5, 10, 12], [10, 15, 7], [15, 20, 7], [15, 20, 12], [20, 25, 7]]));
// >> [[0,7],[5,12],[10,7],[15,12],[20,7],[25,0]]
console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]));
