/**
 * 题目：简述instanceof的原理，并用代码实现
 * 知识点：如果a沿着原型链能找到b.prototype,那么a instanceof b为true，也称为a是b的一个实例
 * 解法：遍历a的原型链，如果找到b.prototype,返回true，否则返回false
 */
const instanceOf = (a,b) =>{
  let p=a; //p是一个指针
  while(p){
    if(p===b.prototype){
      return true;
    }
    p=p._proto_;
  }
  return false;
};