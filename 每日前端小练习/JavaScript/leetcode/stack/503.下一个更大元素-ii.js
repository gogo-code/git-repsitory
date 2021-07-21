/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 方法1：暴力破解
  let n = nums.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    //挨个儿寻找每个元素的下一个较大值
    let j = (i + 1) % n; //j永远指向i的下一个元素，包括循环
    while (i != j) {
      //j循环一趟还没走到i,就执行以下操作，找到较大值
      if (nums[j] > nums[i]) {
        arr.push(nums[j]);
        break;
      } else {
        j = (j + 1) % n;
      }
    }
    if (typeof arr[i] == "undefined") {
      //循环一趟走到i仍然没有找到较大值，就加入-1
      arr[i] = -1;
    }
  }
  return arr;

  // 方法2：单调栈
  // let n =nums.length
  // let arr=new Array(n).fill(-1),stack=[]
  // let map=new Map()
  // for (let i = 0; i < arr.length; i++) {
  //   while(stack.length&&arr[i%n]>stack[stack.length-1]) {
  //     map.set(stack.pop())
  //   }
  //   stack.push(arr[i])
  // }
  
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
// @lc code=end
