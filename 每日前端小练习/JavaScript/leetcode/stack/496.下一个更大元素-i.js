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
// 暴力破解
var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let flag = true;
      if (nums1[i] == nums2[j]) {
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums1[i]) {
            arr.push(nums2[k]);
            flag = false;
            break;
          }
        }
        flag&&arr.push(-1);
        flag=true
      }
    }
  }
  return arr;
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
// @lc code=end
