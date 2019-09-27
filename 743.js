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
  let nodesTime = {};
  let weights = {};
  let queue = [K];

  let last;
  while (times.length !== 0) {
    last = times.pop();
    if (weights[last[0]] === undefined) {
      weights[last[0]] = [last];
    } else {
      weights[last[0]].push(last);
    }
  }

  let iter;
  while(queue.length !== 0) {
    iter = queue.shift();
    if (nodesTime[iter] === undefined) nodesTime[iter] = 0;

    let el;
    for (let i = 0; i < weights[iter].length; i++) {
      el = weights[iter][i];
      if (nodesTime[el[1]] === undefined) {
        nodesTime[el[1]] = nodesTime[iter] + el[2];
        traversedSet.add(el[1]);
        if (maxTimeElapsed < nodesTime[el[1]]) maxTimeElapsed = nodesTime[el[1]];
      }
      queue.push(el[1]);
    }
  }

  if (traversedSet.size === N) {
    return maxTimeElapsed;
  } else {
    return -1;
  }
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)); // 2