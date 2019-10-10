
// https://leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // if (n === 1) return [[1]];
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(Array(n));
  }

  let top = left = 0;
  let bottom = right = n - 1;
  let pos = [0, 0];
  let val = 0;
  
  let dir = 0;
  let direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  let vel = direction[dir];

  while (val <= n*n) {
    matrix[pos[1]][pos[0]] = val += 1;

    switch(dir) {
      case 0:
        if (pos[0] === right) {
          dir++;
          top++;
        }
        break;
      case 1:
        if (pos[1] === bottom) {
          dir++;
          right--;
        }
        break;
      case 2:
        if (pos[0] === left) {
          dir++;
          bottom--;
        }
        break;
      case 3:
        if (pos[1] === top) {
          dir++;
          left++;
        }
        break;
      default:
        return [];
    }
    dir %= 4;
    pos[0] += direction[dir][0];
    pos[1] += direction[dir][1];
  }

  return matrix;
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));