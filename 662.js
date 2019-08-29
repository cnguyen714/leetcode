
// https://leetcode.com/problems/maximum-width-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
function Node(val, next = null) {
  this.val = val;
  this.next = next;
  return this;
}

function Queue(head = null) {
  this.head = this.tail = head;
  this.isEmpty = () => {
    return this.head === null;
  }
  this.push = (node) => {
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }
  this.pop = () => {
    if (this.isEmpty()) return false; 
    let top = this.head;
    this.head = this.head.next;
    if (this.isEmpty()) this.tail = null;
    return top;
  }
  return this;
}

var widthOfBinaryTree = function (root) {
  if (root === null) return 0;
  let rootQueueNode = new Node({ node: root, h: 1, i: 1 })
  let queue = new Queue(rootQueueNode);
  let maxWidth = 1;
  let currentHeight = 1;
  let left = rootQueueNode;
  let prev;

  let el;
  while(el = queue.pop().val) {
    // console.log(`step ${el.val.node.val} - i:${el.val.i}`)
    if(el.h > currentHeight) {
      let width = prev.i - left.i + 1;
      if (maxWidth < width) maxWidth = width;
      left = el;
      currentHeight = el.h;
    }

    if (el.node.left) queue.push(new Node({node: el.node.left, h: el.h + 1, i: (el.i - 1) * 2 + 1}));
    if (el.node.right) queue.push(new Node({node: el.node.right, h: el.h + 1, i: (el.i - 1) * 2 + 2}));

    prev = el;
  }

  let width = prev.i - left.i + 1;
  if (maxWidth < width) {
    maxWidth = width;
  }
  return maxWidth;
};

let n1 = new TreeNode(1);
let n3 = new TreeNode(3);
let n2 = new TreeNode(2);
n1.left = n3;
n1.right = n2;
let n5 = new TreeNode(5);
let n3p2 = new TreeNode(3);
let n9 = new TreeNode(9);
n3.left = n5;
n3.right = n3p2;
n2.right = n9;

console.log(widthOfBinaryTree(n1));