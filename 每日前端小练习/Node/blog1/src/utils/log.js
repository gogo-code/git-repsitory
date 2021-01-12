const fs = require("fs");
const path = require("path");
const { Stream } = require("stream");

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + "\n");
}

// 生成 write Stream
function createWriteStream(fileName) {
  console.log(__dirname)
  const fullFileName = path.join(__dirname, "../", "../","logs",fileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: "a",
  });
  return writeStream;
}

// 写访问日志
const accessWriteStream = createWriteStream("access.log");
function access(log) {
  writeLog(accessWriteStream,log)
}

module.exports = {
  access,
};
