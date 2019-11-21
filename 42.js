
//https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height === undefined) return null;
  if (height.length <= 2) return 0;

  let trapped = 0;
  // let prev_max = height[0];
  let max_index = 0;
  let max = height[0];
  let forward_basin = 0;

  // let rev_next_max = height[height.length - 1];
  let rev_max_index = height.length - 1;
  let rev_max = height[height.length - 1];
  let rev_basin = 0;

  let i = 0;
  // let i = -1;
  let j = height.length - 1;
  // let j = height.length;

  let isRightMax;
  while (i < j) {
    isRightMax = rev_max >= max;

    if (isRightMax) {
      if (height[i] < max) {
        forward_basin += max - height[i];
        // console.log(`=>> ${forward_basin}`)
      } else if (height[i] === max) {
        trapped += forward_basin;
        max_index = i;
        // console.log(`=>> max @ ${i} == ${max} || ${trapped}`);
        forward_basin = 0;
      } else {
        trapped += forward_basin;
        prevmax_index = i
        max = height[i];
        // console.log(`=>> max @ ${i} == ${max} || ${trapped}`);        
        forward_basin = 0;
        i--;
      }
      i++;
    } else {
      if (height[j] < rev_max) {
        rev_basin += rev_max - height[j];
        // console.log(`<<= ${rev_basin}`)
      } else if (height[j] === rev_max) {
        trapped += rev_basin;
        rev_max_index = j;
        // console.log(`<<= max @ ${j} == ${rev_max} || ${trapped}`);
        rev_basin = 0;
      } else {
        trapped += rev_basin;
        rev_max_index = j
        rev_max = height[j];
        // console.log(`<<= max @ ${j} == ${rev_max} || ${trapped}`);
        rev_basin = 0;
        j++;
      }
      j--;
    }
  }


  if (i === j) {
    if (isRightMax) {
      trapped += forward_basin;
    } else {
      trapped += rev_basin;
    }
  }

  // elegant version
  // let result = 0;
  // let start = 0;
  // let end = height.length - 1;
  // while (start < end) {
  //   if (height[start] <= height[end]) {
  //     let current = height[start];
  //     while (height[++start] < current) {
  //       result += current - height[start];
  //     }
  //   } else {
  //     let current = height[end];
  //     while (height[--end] < current) {
  //       result += current - height[end];
  //     }
  //   }
  // }
  // return result;

  return trapped;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // => 6
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])); // => 23
console.log(trap([0, 2, 0])); // 0
// console.log(trap([3, 0, 2, 2, 2, 1, 4, 3, 4])); // 8
//                   3  1  1| 1  2    <== 4  || 2
//                              4
//
console.log(trap([2, 1, 0, 3])); // 3
