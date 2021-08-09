/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 方法一 删除0后面补0
  // let sum=0
  // for (let i = 0; i < nums.length; i++) {
  //   if(nums[i]===0) {
  //     nums.splice(i,1)
  //     ++sum
  //     // 这里需要将i减一
  //     --i
  //   }
  // }
  // while(sum!==0) {
  //   nums.push(0)
  //   --sum
  // }
  // return nums

  // 方法二 双指针
  let right = 0; // 
  let left = 0; // 指向第一个零的位置
  while (right < nums.length) {
    if (nums[right] !== 0) {
      // [nums[right],nums[left]]=[nums[left],nums[right]]
      let temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      ++left;
    }
    ++right;
  }
  return nums;
};
// @lc code=end
