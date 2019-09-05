/**
 * @param {number[]} nums
 * @return {number}
 */

// Recursive solution obviously is too slow
// var rob = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];

//   let firstVal = nums.pop();
//   let skipVal = nums.pop();

//   let firstSide = firstVal + robRec(nums, true);
//   let doubleVal = nums.pop();
//   let skipSide = skipVal + robRec(nums);
//   nums.pop();
//   let doubleSide = doubleVal = robRec(nums);

//   if (doubleSide > skipSide) skipSide = doubleSide;
//   return firstSide >= skipSide ? firstSide : skipSide;
// };

// var robRec = function (numsIn, first = false) {
//   if (numsIn.length === 0) return 0;
//   if (numsIn.length === 1 && first === false) return numsIn[0];
//   if (numsIn.length === 1 && first) return 0;

//   let nums = Object.assign([], numsIn);
//   let firstVal = nums.pop();

//   let skipVal;
//   if (nums.length === 1 && first) {
//     skipVal = 0;
//   } else {
//     skipVal = nums.pop();
//   }

//   let firstSide = firstVal + robRec(nums, first);
//   nums.pop();

//   let skipSide = skipVal + robRec(nums, first);

//   return firstSide >= skipSide ? firstSide : skipSide;
// }

var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length % 2 === 1) {
    let last = nums.pop();
    let first = nums[0]; 
    if (last > first) nums[0] = last;
  }

  let run = Array(nums.length);
  run[0] = nums[0];
  run[1] = Math.max(nums[0],nums[1]);
  for (let i = 2; i < nums.length; i++) {
    run[i] = Math.max(nums[i] + run[i-2],run[i-1]);
    // console.log(run[i])
  }
  return run[nums.length-1];
}

// console.log(rob([2, 3, 2])); // -> 3
// console.log(rob([1, 2, 3, 1])); // -> 4
console.log(rob([2, 1, 1, 2])); // -> 3
console.log(rob([1, 2, 1, 1])); // -> 3
// console.log(rob([2, 7, 9, 3, 1])); // -> 11
// console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3])); // -> 36
// console.log(rob([155, 44, 52, 58, 250, 225, 109, 118, 211, 73, 137, 96, 137, 89, 174, 66, 134, 26, 25, 205, 239, 85, 146, 73, 55, 6, 122, 196, 128, 50, 61, 230, 94, 208, 46, 243, 105, 81, 157, 89, 205, 78, 249, 203, 238, 239, 217, 212, 241, 242, 157, 79, 133, 66, 36, 165])); // -> 36