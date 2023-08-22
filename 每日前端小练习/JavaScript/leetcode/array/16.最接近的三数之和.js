/*
 * @Description: 
 * @Author: zuoguoliang
 * @Date: 2023-08-17 17:50:37
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2023-08-22 16:39:47
 */
/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  
  nums.sort((a, b) => a - b);
  // 先设置一个最大数
  let _target=Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    // 左指针
    let l = i + 1;
    // 右指针
    let r = nums.length - 1;
    
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      // 判断最接近于target的值
      if(Math.abs(sum-target)<Math.abs(_target-target)) {
        _target=sum
      }
      if (sum == target) {
        return sum
      } else if (sum > target) {
        --r;
      } else if (sum < target) {
        ++l;
      }
    }
  }
  return _target;
};
// @lc code=end

