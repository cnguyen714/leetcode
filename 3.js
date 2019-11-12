// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let sub = {};
  let max = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (sub[s[i]]) {
      // i = sub[s[i]];
      for (let j = i - Object.keys(sub).length; s[j] !== s[i]; j++) {
        delete sub[s[j]];
      }
    } else {
      sub[s[i]] = i;
    }

    length = Object.keys(sub).length;
    if (length > max) {
      max = length;
    };
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3