const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  let obj = url.parse(req.url, true);
  let pathname = obj.pathname;
  let query = obj.query;
  let filename = '.' + pathname;
  let extname = path.extname(pathname);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.end('laod fail');
    }
    getMime(extname, function (mime) {
      res.writeHeader(200, {
        'Content-Type': mime
      });
    })
    // 读取文件
    res.end(data);
  })
}).listen(8080);

function getMime(extname, callback) {
  fs.readFile('./mime.json', function (err, data) {
    if (err) {
      res.end('mime文件读取错误');
      return;
    }
    callback(data[extname]);
  })
}