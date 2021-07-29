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

const sortedSquares = function (nums) {
  // 方法一：暴力破解
  let arr=nums.map((value)=>value**2).sort((a,b)=>a-b)
  return arr
  // 方法二：双指针（性能不太好）
  // let res = []
  // for (let i = 0, j = nums.length - 1; i <= j;) {
  //   const left = Math.abs(nums[i])
  //   const right = Math.abs(nums[j])
  //   if (right > left) {
  //     // push element to the front of the array
  //     res.unshift(right * right)
  //     j--
  //   } else {
  //     res.unshift(left * left)
  //     i++
  //   }
  // }
  // return res
}

// @lc code=end

