/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 方法一
  for (let i = 0; i < s.length/2; i++) {
    let temp=s[i]
    s[i]=s[s.length-i-1]
    s[s.length-i-1]=temp
  }
  return s
};
// @lc code=end

