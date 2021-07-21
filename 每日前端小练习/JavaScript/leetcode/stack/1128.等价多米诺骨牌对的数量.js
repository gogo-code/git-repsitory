/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  // 方法1：双重循环
  let sum=0;
  for (let i = 0; i < dominoes.length; i++) {
    let a=dominoes[i][0]
    let b=dominoes[i][1]
    for (let j = i+1; j < dominoes.length; j++) {
      if((a==dominoes[j][1]&&b==dominoes[j][0])||(a==dominoes[j][0]&&b==dominoes[j][1]))
      sum++
    }    
  }
  return sum
};
// @lc code=end

