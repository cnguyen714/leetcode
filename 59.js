
// https://leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) return [[1]];
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(Array(n));
  }

  let top = left = 0;
  let bottom = right = n;
  let pos = [0, 0];
  let val = 1;
  
  let dir = 0;
  let direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  while (pos[0] >= left &&
         pos[0] < right &&
         pos[1] >= top &&
         pos[1] < bottom) {

  }
  


  return matrix;
};