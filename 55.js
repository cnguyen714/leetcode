// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  // let maxes = {};
  let max = nums[0];
  // maxes[0] = nums[0];

  let it = 1;
  while (it <= max) {
    let currentMax = nums[it] + it;
    if (currentMax > max) max = currentMax;
    if (max >= nums.length - 1) return true;
    // maxes[it] = max;
    it += 1;
  }

  return false;
};

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false