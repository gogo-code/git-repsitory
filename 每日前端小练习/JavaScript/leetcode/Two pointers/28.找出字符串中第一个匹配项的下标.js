/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 方法一
  // return haystack.indexOf(needle);
  // 方法二
  let arr1=haystack.split('')
  let arr2=needle.split('')
  // 首字母比较
  for (let i = 0; i <= arr1.length-arr2.length; i++) {
      let j=i,k=0
      while(k<arr2.length&&arr1[j]==arr2[k]) {
          k++;
          j++
      }
      if(k==arr2.length) {
        return i
      }    
  }
  return -1
};
// @lc code=end

