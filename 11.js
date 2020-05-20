
// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = Math.min(height[i], height[j]) * (j - i);

  while (i < j) {
    height[i] <= height[j] ? i++ : j--;
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
  }

  return max;
};

console.log(maxArea([1,3]));
console.log(maxArea([2,5,5]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));