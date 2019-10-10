
// https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // this.nums = nums;
  this.sums = [];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    this.sums.push(sum += nums[i]);
  }
  console.log(this.nums);
  console.log(this.sums);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  // let sum = this.nums[i];
  // for (let k = i + 1; k <= j; k++) {
  //   sum += this.nums[k]
  // }
  // return sum;
  if (i === 0) return this.sums[j];
  return this.sums[j] - this.sums[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let nums = [-2, 0, 3, -5, 2, -1];
let array = new NumArray(nums);
console.log(array.sumRange(0,2)); // 1
console.log(array.sumRange(2,5)); // -1
console.log(array.sumRange(0,5)); // -3