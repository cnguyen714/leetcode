
//https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let newMax = 0;
  let out = "";
  let extend = 1;
  let even = false
  
  for (let i = 0; i < s.length - 1; i++) {
    extend = 1;

    while ( s[i - extend] === s[i + extend] && 
            i - extend >= 0 && 
            i + extend < s.length ) {
    
      newMax = 1 + extend * 2;
      if (newMax > max) {
        max = newMax;
        out = s.substr(i - extend, i + extend);
      }

      extend++;
    }

    if(s[i] === s[i+1]) {
      newMax = 2;
      if (newMax > max) {
        max = newMax;
        out = s.substr(i, i + 2);
      }

      while ( s[i - extend] === s[i + 1 + extend] &&
              i - extend >= 0 &&
              i + 1 + extend < s.length ) {

        newMax = 2 + extend * 2;
        if (newMax > max) {
          max = newMax;
          out = s.substr(i - extend, i + extend);
        }

        extend++;
      }
    }
  }

  return out;
};

console.log(longestPalindrome("bb"));
console.log(longestPalindrome("babad"));