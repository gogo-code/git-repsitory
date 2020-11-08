/** 
 * 函数柯里化
 * 把一个函数当做参数传递给另一个函数
 * 一个函数返回了一个函数
*/

function fn(callback){
  callback()
}
fn(function(){console.log(1)})

function Fn(x){
  return function(y){
    return x+y
  }
}
Fn(1)(2)

/**
 * AOP
 * 不修改原有功能，而是在原有功能的基础上添加新的功能
 */
Function.prototype.before=function(callback){
  // this指向Say
  var that=this
  return function(){
    //this指向window
    //新增功能
    callback()
    that()
  }
}
function Say(){
  console.log("object")
}
var newSay=Say.before(function(){
  console.log("zuo")
})
// window.newSay
newSay()