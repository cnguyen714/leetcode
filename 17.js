//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */

const digitsCombo = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if(digits === "") return [];

  let out = digitsCombo[digits[0]];
  
  for (let i = 1; i < digits.length; i++) {
    let newArr = [];

    digitsCombo[digits[i]].forEach(char => {
      newArr.push(...out.map(combo => combo + char))
    })

    out = newArr;
  }

  return out;
};

console.log(letterCombinations("23"));