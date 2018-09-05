const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer((req, res) => {
  //读取www./
  fs.readFile('./www/index.html', (err, data) => {
    res.end(data);
  })
}).listen(8080);