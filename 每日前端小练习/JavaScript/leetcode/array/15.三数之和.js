/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  if (nums.length < 3) return [];
  // 方法一：枚举，三次循环，每次循环不能和之前的数据一样或者是连续存在的0容易超时
  // for (let i = 0; i < nums.length; i++) {
  //   if (i == 0 || nums[i] != nums[i - 1]) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (j==i+1||nums[j] != nums[j - 1]) {
  //         for (let k = j + 1; k < nums.length; k++) {
  //           if (k=j+1||nums[k] != nums[k - 1]) {
  //             if (nums[i] + nums[j] + nums[k] == 0) {
  //               arr.push([nums[i], nums[j], nums[k]]);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // 方法二：指针,先固定一位循环后面两位做指针转移
  for (let i = 0; i < nums.length; i++) {
    // 全是负数或者全是正数
    // if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];
    // 去重
    if (i > 0 && nums[i] == nums[i - 1]) continue; 
    // 左指针
    let l = i + 1;
    // 右指针
    let r = nums.length - 1;
    
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        arr.push([nums[i], nums[l], nums[r]]);
        // 去重
        while(l<r&&nums[l]==nums[l+1]) ++l
        while(l<r&&nums[r]==nums[r-1]) --r
        ++l;
        --r;
      } else if (sum > 0) {
        --r;
      } else if (sum < 0) {
        ++l;
      }
    }
  }
  return arr;
};
console.log(threeSum([1,-1,-1,0]));
// @lc code=end
