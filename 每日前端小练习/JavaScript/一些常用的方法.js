/*
 * @Description:项目中可以使用的方法总结
 * @Author: zuoguoliang
 * @Date: 2021-12-29 10:01:56
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2021-12-29 10:23:22
 */

// 将数组按固定长度分割
const cutArray = (array, subLength) => {
  let index = 0;
  let newArr = [];
  while (index < array.length) {
    newArr.push(array.slice(index, (index += subLength)));
  }
  return newArr;
};

console.log(cutArray([1, 23, 34], 1));

//  数组 根据指定下标交互位置
const arrayMove = (array, from, to) => {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
};
console.log(arrayMove([1, 23, 34], 2, 1));

