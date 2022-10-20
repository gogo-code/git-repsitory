const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "index.js");

// 读取文件内容
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // data是二进制类型，需要转化为字符串

  let arr=data.toString().split('\n')
  console.log(arr);
  let str=""
  arr.map(value=>str+="'"+value+"'"+"\n")
  console.log(str);
});

// 写入文件
// const content ='这是新写入的内容\n'
// const opt ={
//   flag:'a' //追加写入，覆盖用‘w’
// }
// fs.writeFile(fileName,content,opt,(err) => {
//   if(err) {
//     console.error(err)
//   }
// })

// // 判断文件是否存在
// fs.exists(fileName,(exist) => {
  
// })

