
/**
 * @param {number[][]} grid
 * @return {number}
 */

// grid[i][j] 
// grid[y][x]
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

var maxIncreaseKeepingSkyline = function (grid) {
  if (grid[0].length === 1) return grid;

  let topSky = [];
  for (let x = 0; x < grid[0].length; x++) {
    let max = 0;
    for (let y = 0; y < grid.length; y++) {
      let height = grid[y][x];
      if (max < height) max = height;
    }
    topSky.push(max);
  }
  console.log(topSky);

  let leftSky = [Math.max(...grid[0])];
  for (let y = 1; y < grid.length; y++) {
    leftSky.push(Math.max(...grid[y]));
  }
  console.log(leftSky);
  
  let sum = 0;
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      sum += topSky[x] < leftSky[y] ? topSky[x] - grid[y][x] : leftSky[y] - grid[y][x];
    }
  }
  return sum;
};

let grid = [[3, 0, 8, 4],
            [2, 4, 5, 7],
            [9, 2, 6, 3],
            [0, 3, 1, 0] ];

console.log(maxIncreaseKeepingSkyline(grid));