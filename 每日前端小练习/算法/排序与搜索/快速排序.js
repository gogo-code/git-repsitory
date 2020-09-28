/**
 * 思路：
 * 从数组中任意选择一个基准，
 * 所有比基准小的元素放在基准前面
 * 比基准大的元素放在基准的后面
 * 递归时间复杂度：O(logN)
 * 分区时间复杂度：O(n)
 */
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    // 递归临界条件为长度为1或0,0是一侧没有数组的情况
    if (arr.length === 1 || arr.length === 0) return arr;
    const left = [];
    const right = [];
    let mid = arr[0];
    // 这里注意是从1开始做循环
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
  console.log(this);
};
const arr = [5, 4, 3, 2, 1];
arr.quickSort();
