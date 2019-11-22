//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */

const digitsCombo = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

var letterCombinations = function (digits) {
  if(digits === "") return [];
  if(i >= digits.length) return [];

  let out = [];
  let digit = digits[i];
  let letters = digitsCombo[digit];
  // console.log(letters);
  letters.split('').map(c => {
    out.concat(letterCombinations(digits, i + 1).map(combo => c + combo));
  });

  return out;
};

console.log(letterCombinations("23"));