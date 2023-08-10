let arr=[
  {
    name:'二',
    value:2
  },{
    name:'三',
    value:3
  }
]


let arr3=arr.map(item=>{
  let arr2=[]
  arr2.push(Object.values(item))
  return arr2
})

console.log(arr3);