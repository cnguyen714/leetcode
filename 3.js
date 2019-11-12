// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let sub = {};
  let max = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (sub[s[j]]) {
      i = Math.max(sub[s[j]], i);
    }

    max = Math.max(j - i + 1, max);
    sub[s[j]] = j + 1;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring(" ")); // 1