// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

  for (let x = 1; x < grid[0].length; x++) {
    grid[0][x] = grid[0][x] + grid[0][x-1];
  }

  for (let y = 1; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      grid[y][x] = grid[y][x] + Math.min(x === 0 ? Infinity : grid[y][x-1], grid[y-1][x]);  
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));
console.log(minPathSum([
  [1, 2, 5], 
  [3, 2, 1]
]));
