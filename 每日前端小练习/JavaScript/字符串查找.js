/*
 * @Description:有bug
 * @Author: zuoguoliang
 * @Date: 2021-12-17 13:51:40
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2021-12-29 13:58:03
 */
let b = '12323456',
  a = '11234578234789';
let arr1 = a.split('');
let arr2 = b.split('');
let arr3 = [];
let preValue = '-1'; //存储前一个值
let preIndex = -1; //存储前一个值的下标
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr2[i] == arr1[j]) {
      if (preIndex < 0) {
        preValue = arr2[i];
        preIndex = i;
        arr3.push(preValue);
      } else {
        if (arr2[i - 1] == preValue&&arr1[j-1]==preValue) {
          preValue = arr2[i];
          preIndex = i;
          arr3.push(preValue);
        }
      }
    }
  }
}
console.log(arr3);
