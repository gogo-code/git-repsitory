/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 方法一 暴力破解
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i+1; j  < numbers.length; j++) {
        if(numbers[i]+numbers[j]==target)
          return [i+1,j+1]
      }
  }
  // 方法二 双指针
  
};

// @lc code=end

