//前端向服务器请求数据 ，服务器去磁盘读取数据 ，然后把读取到的信息返回给前台
//1.nodejs不会自动根据路由的不同，渲染不同的的内容，他需要我们自己去判断路径的不同，来返回不同的内容
//2. 如果不想重启服务器，而又想输入不同的内容，渲染不同的页面，可以读取文件和处理路径的方式来解决

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    //根据请求地址的不同，返回不同的内容
    //1.读取文件
    if(req.url == '/favicon.ico'){
        return;
    }
    let pathName = './static/'+req.url;
    fs.readFile(pathName,function (err,data){
        if(err){
            res.write('404');
            res.end();
            //也可以这么写   res.end('404');
        }
        res.writeHeader('200',{'Content-Type':'text/html;charset=UTF-8'});
        res.write(data);
        res.end();
        //   也可以这么写   res.end(data);
    })
}).listen(8081);