
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

  if(s.length >= 1) {
    out = s[0];
    max = 1;
  }
  
  for (let i = 0; i < s.length - 1; i++) {
    

    extend = 1;
    while ( s[i - extend] === s[i + extend] && 
            i - extend >= 0 && 
            i + extend < s.length ) {
    
      newMax = 1 + extend * 2;
      if (newMax > max) {
        max = newMax;
        out = s.substring(i - extend, i + 1 + extend);
      }

      extend++;
    }

    extend = 1;
    if(s[i] === s[i+1]) {
      newMax = 2;
      if (newMax > max) {
        max = newMax;
        out = s.substring(i, i + 2);
      }

      while ( s[i - extend] === s[i + 1 + extend] &&
              i - extend >= 0 &&
              i + 1 + extend < s.length ) {

        newMax = 2 + extend * 2;
        if (newMax > max) {
          max = newMax;
          out = s.substring(i - extend, i + 2 + extend);
        }

        extend++;
      }
    }
  }

  return out;
};

console.log(longestPalindrome("bb"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));