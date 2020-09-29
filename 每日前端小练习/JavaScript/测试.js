function insert(arr, item, index) {
  let arr1=[...arr.splice(index,0,item)];
  return arr1;
  

}
let arr=[1, 2, 3, 4]
console.log(insert(arr,'z', 2));