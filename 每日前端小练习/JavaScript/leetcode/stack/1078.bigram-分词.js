/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  // 方法1
  let arr=text.split(" ")
  let ans=[]
  for (let i = 0; i < arr.length-2; i++) {
    if(arr[i]===first&&arr[i+1]===second)
      ans.push(arr[i+2])
  }
  return ans
};
// @lc code=end

