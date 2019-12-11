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
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      if (map[stack.pop()] != s[i]) {
        return false;
      }
    }
  }
  if(stack.length != 0) return false;
  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("([])"));