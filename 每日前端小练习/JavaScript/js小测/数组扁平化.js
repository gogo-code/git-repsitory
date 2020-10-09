function flat(arr){
  // 验证arr中，还有没有深沉数组[1,2,[3,4]]
  const isDeep =arr.some(item=>item instanceof Array)
  if(!isDeep){
    return arr   //已经是[1,2,3,4]
  }
  const res=Array.prototype.concat.apply([],arr)
  // 相当于[].concat(1,2,3,4,[5,6])
  // concat无法扁平化深沉数组
  return flat(res) //递归

}
const res=flat([1,2,[3,[4]],5])
console.log(res);
