/**
 * 思路：
 * 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
 * 如果目标值大于或小于中间元素，则在大于或小于的那半数组中搜索
 * 前提是数组是有序的
 * 时间复杂度n
 */
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;

  
};
const arr = [1, 2, 3, 4, 5];
console.log(arr.binarySearch(5));
