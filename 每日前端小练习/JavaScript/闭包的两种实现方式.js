// 函数作为返回值被传递
const create = () => {
  const a = 100;
  return () => {
    console.log(a);
  };
};
const fn = create();
const a = 200;
fn();

// 函数作为参数被传递
const create2 = (fn2) => {
  const b = 200;
  fn2();
};
const b = 100;
function fn2() {
  console.log(b);
}
create2(fn2);

// 闭包:变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方
