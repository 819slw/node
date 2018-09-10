const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const sd = require('silly-datetime');
const path = require('path');

http.createServer((req, res) => {
  //读取www./
  fs.readFile('../static/request.html', (err, data) => {
    res.end(data);
  })
  if (req.url == '/upload' && req.method.toLocaleLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    // 图片上传后的存储路径
    form.uploadDir = '../www/'; //上传的目录
    form.parse(req, (err, fields, files) => {
      // fields:{name:value}的文本域  files:关于你上传的这个文件的信息
      // 更改文件名字让文件可以正常打开
      let obj = path.parse(files.file.name);
      let filename = obj.name;
      let extname = obj.ext;
      let oldPath = files.file.path;
      let newPath = form.uploadDir + filename + '-' + sd.format(new Date(), 'YYYYMMDD HHmmss') + Math.floor(Math.random()) * 100 + extname;
      console.log(form.uploadDir);
      console.log(filename);
      console.log(sd.format(new Date(), 'YYYYMMDD HHmmss') + Math.floor(Math.random()) * 100);
      console.log(extname);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          res.end('更名失败');
          return;
        }
      })
    })
  }
}).listen(8080);