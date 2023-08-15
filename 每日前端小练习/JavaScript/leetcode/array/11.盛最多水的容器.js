/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0,
    j = height.length - 1,
    max = 0;
  while (i < j) {
    if (height[i] > height[j]) {
      max = max > height[j] * (j - i) ? max : height[j] * (j - i);
      --j;
     
    } else {
      max = max > height[i] * (j - i) ? max : height[i] * (j - i);
      ++i;
    }
  }
  return max;
};
// @lc code=end
console.log(maxArea([1,8,6,2,5,4,8,3,7]))