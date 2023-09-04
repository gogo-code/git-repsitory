/*
 * @Description:
 * @Author: zuoguoliang
 * @Date: 2023-09-01 14:42:39
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2023-09-04 17:38:38
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let _nums1 = nums1.sort((a, b) => a - b);
  let _nums2 = nums2.sort((a, b) => a - b);
  let length1 = _nums1.length,
    length2 = nums2.length;
  let index1 = 0,
    index2 = 0;
  let result = [];
  while (index1 < _nums1.length && index2 < _nums2.length) {
    if (_nums1[index1] == _nums2[index2]) {
      // 去重
      if(!result.includes(_nums1[index1])) {
        result.push(_nums1[index1]);
      }
      ++index1;
      ++index2;
    } else if (_nums1[index1] > _nums2[index2]) {
      ++index2;
    } else {
      ++index1;
    }
  }
  return result;
};
console.log(intersection([1,2,2,1], [2,2]));
// @lc code=end
