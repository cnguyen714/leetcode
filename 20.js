// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      if (matchingBracket(stack[stack.length - 1], s[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if(stack.length != 0) return false;
  return true;
};

var matchingBracket = function (c1, c2) {
  if (c1 === "(" && c2 === ")") return true;
  if (c1 === "[" && c2 === "]") return true;
  if (c1 === "{" && c2 === "}") return true;
  return false;
}

console.log(matchingBracket("(", ")"));
console.log(matchingBracket("[", "]"));
console.log(matchingBracket("{", "}"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("([])"));