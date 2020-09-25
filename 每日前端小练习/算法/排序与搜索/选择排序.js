/**
 * 思路：
 * 找到数组中的最小值，选中放置在第一位（交换）
 * 再找第二小放到第二位
 * 以此类推，循环n-1
 * 
 */
Array.prototype.selectionSort = function () {
  
  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i;
    for (j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        // 存储最小值的下标
        indexMin = j;
      }
      如果最小下标和自身的下标相等就不需要交换
      if(indexMin!==i){
        const temp = this[i];
        this[i] = this[indexMin];
        this[indexMin] = temp;
      }
    }
  }

  console.log(this);
};
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
