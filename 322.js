//https://leetcode.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = [0];

  for (let j = 1; j <= amount; ++j) {
    dp.push(Infinity);
    console.log("\n",j,"");
    for (let i = 0; i < coins.length; ++i) {
      if (coins[i] <= j) {
        console.log(dp[j], " ", dp[j - coins[i]]);
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
    console.log("",dp[j])
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// console.log(coinChange([1,2,5],11));
console.log(coinChange([2,7],13));