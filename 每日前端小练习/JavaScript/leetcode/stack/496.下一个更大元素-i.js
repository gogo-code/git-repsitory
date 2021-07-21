/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  // 方法1：暴力破解
  // let arr = [];
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     let flag = true;
  //     if (nums1[i] == nums2[j]) {
  //       for (let k = j + 1; k < nums2.length; k++) {
  //         if (nums2[k] > nums1[i]) {
  //           arr.push(nums2[k]);
  //           flag = false;
  //           break;
  //         }
  //       }
  //       flag&&arr.push(-1);
  //       flag=true
  //     }
  //   }
  // }
  // return arr;

  // 方法2：单调栈
  let arr=[],stack=[]
  // 存储哈希表
  let map= new Map()
  nums2.forEach((item) => {
    // 循环遍历栈找出数组2中的下一个更大元素
    while(stack.length&&item>stack[stack.length-1]) {
      // 存储下标
      map.set(stack.pop(),item)
    }
    stack.push(item)
  })
  // 继续遍历，将剩余找不到的设置为-1
  stack.forEach(item => map.set(item,-1))
  nums1.forEach(item=>arr.push(map.get(item)))
  return arr
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
// @lc code=end
