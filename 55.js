// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  // let maxes = {};
  let reach = nums[0];
  // maxes[0] = nums[0];

  for (let i = 1; i <= reach; i++) {
    reach = Math.max(reach, nums[i] + i)
    if (reach >= nums.length - 1) return true;
    // maxes[i] = max;
  }

  return false;
};

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false