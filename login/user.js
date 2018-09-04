const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  var obj = url.parse(req.url, true);
  var getData = obj.query;
  var pathname = obj.pathname;
  var filename = '.' + pathname;

  // if (pathname === '/user') {
  //   res.end('{"bok":false,"msg":"该用户登陆成功"}');
  // }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.end('404');
    }
    res.end(data);
  })
}).listen(8080);