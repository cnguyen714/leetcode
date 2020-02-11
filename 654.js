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
  let leftIt = new TreeNode(nums[0]);
  let rightIt = new TreeNode(nums[nums.length - 1]);

  root.left = leftIt;
  root.right = rightIt;

  for (let i = 1; i < maxIndex; i++) {
    leftIt.right = new TreeNode(nums[i]);
    leftIt = leftIt.right;
  }

  for (let i = nums.length - 2; i > maxIndex; i--) {
    rightIt.left = new TreeNode(nums[i]);
    rightIt = rightIt.left;
  }

  return root;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));