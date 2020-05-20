// https://leetcode.com/problems/maximum-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var constructMaximumBinaryTree = function (nums) {
  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  let root = new TreeNode(nums[maxIndex]);

  if (maxIndex !== 0) {
    let tree = maxSubtree(nums, 0, maxIndex - 1);
    root.left = tree;
  }

  if (maxIndex !== nums.length -1) {
    let tree = maxSubtree(nums, maxIndex + 1, nums.length - 1);
    root.right = tree;
  }

  return root;
};

var maxSubtree = function(nums, i, j) {
  let root = null;
  let iter = null;
  let iterIndex;
  let next;

  while(i <= j) {

    let next = new TreeNode(nums[nums[i] >= nums[j] ? i : j]);
    
    if(iter === null)  {
      iter = next;
    } else {
      if (i === j) {
        iterIndex > i ? iter.left = next : iter.right = next;
      } else {
        if (nums[i] >= nums[j]) {
          iter.right = next;
        } else {
          iter.left = next;
        }
      }
    }
    if(root === null) root = iter;
    iterIndex = nums[i] >= nums[j] ? i : j;
    iter = next;
    next.val === nums[i] ? i++ : j--;
  }

  return root;
}

// console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
console.log(constructMaximumBinaryTree([3, 2, 1]));