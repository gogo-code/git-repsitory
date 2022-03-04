/*
 * @Description:
 * @Author: zuoguoliang
 * @Date: 2021-01-06 09:01:13
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2022-01-18 16:37:04
 */
// function insert(arr, item, index) {
//   let arr1=[...arr.splice(index,0,item)];
//   return arr1;

const { get } = require("js-cookie")


// }
// let arr=[1, 2, 3, 4]
// console.log(insert(arr,'z', 2));
const a={
  valueOf(){
    return 'valueOf'
  },
  toString(){
    return 'toString'
  },
  get(){
    return 'get'
  }
}

let b={
    a:function() {
        return 1
    }()
}
console.log(b.a);
