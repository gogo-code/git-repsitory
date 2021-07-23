/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
// 方法一：暴力破解
  let arr=nums.map((value)=>value**2).sort((a,b)=>a-b)
  return arr

};
// @lc code=end

