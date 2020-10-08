let i;
for (let i = 0; i <= 3; i++) {
  setTimeout(function(){
    console.log(i);
  },0)
    
}

let a=100
function test(){
  console.log(a);
  a=10
  console.log(a);

}
test()
console.log(a);

// 先不看函数声明，看执行
