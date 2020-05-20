
//https://leetcode.com/problems/island-perimeter/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  let width = grid[0].length;
  let prev = Array(width);
  prev.fill(0); 
  grid.push(prev); // tack on an empty row to the end
  let height = grid.length;

  for (let i = 0; i < height; i++) {
    let row = grid[i];
    let land = false;
    for (let x = 0; x < width; x++) {
      if (row[x] === 1) {
        if (!land) {
          land = true;
          perimeter++;
        } 
        if (x === width - 1) perimeter++;
      } else {
        if (land) {
          perimeter++;
          land = false;
        }
      }
      if (prev[x] === 1 && row[x] === 0) perimeter++;
      if (prev[x] === 0 && row[x] === 1) perimeter++;
    }
    prev = grid[i];
  }
  return perimeter;
};

let island = [[1]]
// let island = [[0, 1, 0, 0],
//               [1, 1, 1, 0],
//               [0, 1, 0, 0],
//               [1, 1, 0, 0]];

console.log(islandPerimeter(island)); // -> 16