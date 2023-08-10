/*
 * @Description: 
 * @Author: zuoguoliang
 * @Date: 2021-01-06 09:01:13
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2023-07-04 15:08:21
 */
function queryToObj() {
  const res = {};
  const search = location.search.substr(1); //去掉前面的？
  search.split('&').forEach((paramStr) => {
    const arr = paramStr.split('=');
    const key = arr[0];
    const val = arr[1];
    res[key] = val;
  });
  return res;
}
// 使用URLSearchParams;
function queryToObj() {
  const res = {};
  const pList = new URLSearchParams(location.search);
  pList.forEach((val, key) => {
    res[key] = val;
  });
  return res;
}
