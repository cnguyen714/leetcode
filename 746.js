// https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  let mins = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    mins.push(Math.min(mins[i - 2], mins[i - 1]) + cost[i]);
  }

  return mins[mins.length - 1];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));