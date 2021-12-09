/*
 * @Description:
 * @Author: zuoguoliang
 * @Date: 2021-12-09 15:36:34
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2021-12-09 16:10:31
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 方法一
  return haystack.indexOf(needle);
};

// @lc code=end
