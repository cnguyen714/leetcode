
// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length == 0) return 0;
  if(haystack.length == 0) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if(haystack[i] == needle[0] && haystack.substring(i, i + needle.length) == needle) {
      return i
    }
  }
  return -1
};

console.log("hello")
console.log(strStr("hello", "ll"))
