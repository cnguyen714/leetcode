
// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let even = (nums1.length + nums2.length) % 2 === 0; 
  let i = Math.floor(nums1.length / 2);
  let j = Math.floor(nums2.length / 2);
  let goalIndex = even ? Math.floor((nums1.length + nums2.length) / 2) - 1 : Math.floor((nums1.length + nums2.length) / 2);

  while(left !== right && left ) {

  }

};

console.log(findMedianSortedArrays(
  [3,5,9,10,11,16],
  [4,6,8,15]
)) //8.5