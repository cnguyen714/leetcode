// https://leetcode.com/problems/network-delay-time/

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
  let maxTimeElapsed = 0;
  let traversedSet = new Set([]);
  console.log(traversedSet.size);
  if (traversedSet.size === N) {
    return maxTimeElapsed;
  } else {
    return -1;
  }
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)); // 2