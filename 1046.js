
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => { return a - b });
    let r = stones.pop();
    let l = stones.pop();

    let sum = Math.abs(r - l);
    // console.log("r:", r, " ", "l:", l, " " , sum)
    if (sum != 0) {
      stones.push(sum);
      // console.log("num: ", weights.length)
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};