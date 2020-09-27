/**
 * 思路：
 * 把数组分成两半，再递归对子数组进行“分”操作
 * 直到分成一个个单独的数
 * 把两个数合并为有序数组，再对有序数组进行合并，
 * 直到全部子数组合并为一个完整数组
 * 时间复杂度：
 * O(n*logN)
 */
Array.prototype.insertionSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
  console.log(this);
};
const arr = [5, 4, 3, 2, 1];

arr.insertionSort();
