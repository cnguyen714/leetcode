/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, i = 0, j = s.length - 1, canRemove = true) {
  if (s.length === 0) return false;

  while(i < j) {
    if (s[i] !== s[j]) {
      if (!canRemove) return false;
      if ((s[i + 1] === s[j]) && s[i] === s[j - 1]) {
        let leftResult = validPalindrome(s, i + 1, j, false);
        let rightResult = validPalindrome(s, i, j - 1, false);
        return leftResult || rightResult;
      }
      
      if (s[i + 1] === s[j]) {
        canRemove = false;
        i++;
      } else if (s[i] === s[j - 1]) {
        j--;
        canRemove = false;
      } else {
        return false;
      }
    }
    i++;
    j--;
  }

  return true;
};

// console.log(validPalindrome("abca"));
// console.log(validPalindrome("cbbcc"));
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));
//                                              | |                                                           |