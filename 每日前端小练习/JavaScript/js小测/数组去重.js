// function unique(arr) {
//   const res = [];
//   arr.forEach((item) => {
//     if (res.indexOf(item) < 0) {
//       res.push(item);
//     }
//   });
//   return res;
// }
// 使用Set效率更高
function unique(arr){
  return [...new Set(arr)]
}
const res=unique([29,24,23,23])
console.log(res);