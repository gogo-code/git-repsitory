// // 1.记录状态法
// start = () => {
//   console.log("执行函数一次");
// };
// // 记录状态
// let invoked = false;
// if (!invoked) {
//   invoked = true;
//   start();
// }

// // 2.闭包
// function once(fn) {
//   let called = false;
//   return function _once() {
//     if (called) {
//       return _once.value;
//     }
//     called = true;
//     _once.value = fn.apply(this, arguments);
//   };
// }
// // 使用方法
// let index = 0;
// const increment = () => index++;
// const onceIncrement = once(increment);
// onceIncrement();
// onceIncrement();
// onceIncrement();
// console.log(index); // 1

// 3.元编程Reflect(有问题以后解决)
// Reflect.defineProperty(Function.prototype, 'once', {
//   value () {
//     return once(this);
//   },
//   configurable: true,
// })
// let index = 0;
// const increment = () => index++;
// console.log(increment);
// const onceIncrement = increment.once();
// onceIncrement();
// onceIncrement();
// onceIncrement();
// console.log(index); // 1
