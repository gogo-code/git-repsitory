/*
 * @Description:
 * @Author: zuoguoliang
 * @Date: 2023-08-31 11:40:16
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2023-09-01 14:39:12
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr1 = s.split("");
  let arr2 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i=0,j=arr1.length-1,temp
  while(i<j) {
    while(i<j&&!arr2.includes(arr1[i])) {
      i++
    }
    while(i<j&&!arr2.includes(arr1[j])) {
      j--
    }
    temp=arr1[i]
    arr1[i]=arr1[j]
    arr1[j]=temp
    i++
    j--

  }
  return arr1.join("");
};
// @lc code=end
console.log(reverseVowels("aA"));
