function max(){
  const nums=Array.from(arguments)
  let max=0
  nums.forEach(n=>{
    if(n>max){
      max=n
    }
  })
  return max
}
let i=max(18,12,1)
console.log(i);