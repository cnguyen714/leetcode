// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */

let map = {
  "(": ")",
  "[": "]",
  "{": "}",
}
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let topChar = s[i];
    if (topChar === "(" || topChar === "[" || topChar === "{") {
      stack.push(topChar);
    } else if (topChar === ")" || topChar === "]" || topChar === "}") {
      if (map[stack.pop()] != topChar) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("([])"));