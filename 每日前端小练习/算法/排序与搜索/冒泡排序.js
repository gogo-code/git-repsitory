/**
 * 思路：
 * 循环比较相邻元素，交换最大的
 * 把最大的数安排在最后
 * 一共循环length-1
 *时间复杂度：o(n^2)
 *
 */
// 把bubbleSort挂载到原型上，任何数组实例都可以访问该属性
Array.prototype.bubbleSort = function () {
  // 循环倒数第二位避免溢出
  for (let j = 0; j < this.length - 1; j++) {
    for (let i = 0; i < this.length - 1 - j; i++) {
      if (this[i] > this[i + 1]) {
        const temp = this[i];
        this[i] = this[i+1];
        this[i + 1] = temp;
      }
    }
  }
  console.log(this);
};
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
