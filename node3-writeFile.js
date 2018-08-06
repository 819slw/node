const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.writeFile('./static/two.txt','我是被修改的第二个文件',(err)=>{
        if(err){
            res.writeHeader(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.end('写入失败');
        }
        res.end();
    });
}).listen('8080');