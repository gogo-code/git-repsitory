/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") arr.push(")");
    else if (s[i] === "{") arr.push("}");
    else if (s[i] === "[") arr.push("]");
    else if(s[i]!==arr.pop()) return false
  }
  if (arr.length === 0) return true;
  return false;
};
console.log(isValid("()"));
// @lc code=end
